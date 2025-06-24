package in.project.ghbliapi.service;

import in.project.ghbliapi.client.StabilityAiClient;
import in.project.ghbliapi.dto.TextToImageRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class GhibliArtService {

    private final StabilityAiClient stabilityAiClient;
    private final String apiKey;

    private static final List<String> ALLOWED_STYLES = List.of(
            "analog-film", "anime", "cinematic", "comic-book", "digital-art", "enhance",
            "fantasy-art", "isometric", "line-art", "low-poly", "modeling-compound",
            "neon-punk", "origami", "photographic", "pixel-art", "3d-model", "tile-texture","Realistic","Ghibli"
    );

    public GhibliArtService(StabilityAiClient stabilityAiClient, @Value("${stability.api.key}") String apiKey) {
        this.stabilityAiClient = stabilityAiClient;
        this.apiKey = apiKey;
    }

    public byte[] createGhibliArt(MultipartFile image, String prompt) {
        String finalPrompt = prompt + ", in the beautiful detailed anime style of Studio Ghibli";
        String engineId = "stable-diffusion-v1-6";
        String stylePreset = "anime";

        return stabilityAiClient.generateImageFromImage(
                "Bearer " + apiKey,
                engineId,
                image,
                finalPrompt,
                stylePreset
        );
    }

    public byte[] createGhibliArtFromText(String prompt, String style) {
        String engineId = "stable-diffusion-v1-6";

        // 🛡️ Validate and normalize the style
        String normalizedStyle = style.toLowerCase().replace("_", "-");

        if (!normalizedStyle.isBlank() && !ALLOWED_STYLES.contains(normalizedStyle)) {
            throw new IllegalArgumentException("❌ Invalid style preset: " + normalizedStyle);
        }

        String finalPrompt = prompt + ", in the beautiful detailed anime style of Studio Ghibli"+"anime";

        TextToImageRequest requestPayload = new TextToImageRequest(finalPrompt, normalizedStyle);

        return stabilityAiClient.generateImageText(
                "Bearer " + apiKey,
                engineId,
                requestPayload
        );
    }
}
