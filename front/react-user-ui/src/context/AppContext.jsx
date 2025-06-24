import { createContext, useState } from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(); // ✅ Exported

const AppContextProvider = ({ children }) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const loadUserCredits = async () => {
    try {
      const token = await getToken();
      if (!token) throw new Error("No token");

      const response = await axios.get(`${backendUrl}/users/credits`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setCredit(response.data.data.credits);
      } else {
        toast.error("Failed to load credits: " + response.data.message);
      }
    } catch (error) {
      toast.error("Error loading user credits");
    }
  };

  const removeBg = async (selectedImage) => {
    try {
      if (!isSignedIn) {
        await openSignIn();
        return;
      }

      setImage(selectedImage);
      setResultImage(false);
      navigate("/result");

      const token = await getToken();
      if (!token) throw new Error("No token");

      const formData = new FormData();
      selectedImage && formData.append("file", selectedImage);

      const { data: base64Image } = await axios.post(
        `${backendUrl}/images/remove-background`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setResultImage(`data:image/png;base64,${base64Image}`);
      setCredit((prev) => (prev ? prev - 1 : 0));
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove background");
    }
  };

  const contextValue = {
    credit,
    setCredit,
    image,
    setImage,
    resultImage,
    setResultImage,
    backendUrl,
    loadUserCredits,
    removeBg,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
