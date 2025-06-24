package in.project.ghbliapi.controller;//package in.project.ghbliapi.controller;
//
//import in.project.ghbliapi.dto.TextGenerationRequestDto;
//import in.project.ghbliapi.service.GhibliArtService;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//@RestController
//@RequestMapping("/api/v1")
//@CrossOrigin(origins = {"http://localhost:5173","http//127.0.0.1:5173"})
//public class GenerationController {
//    private final GhibliArtService ghibliArtService;
//
//    public GenerationController(GhibliArtService ghibliArtService) {
//        this.ghibliArtService = ghibliArtService;
//    }
//
//    @PostMapping(value = "/generate",produces = MediaType.IMAGE_PNG_VALUE)
//    public ResponseEntity<byte[]> generateGhibliArt(@RequestParam("image")MultipartFile image,
//                                                    @RequestParam("prompt") String prompt){
//        try{
//           byte[] imageBytes= ghibliArtService.createGhibliArt(image,prompt);
//          return  ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(imageBytes);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.internalServerError().build();
//        }
//    }
//
//@PostMapping(value = "generate-from-text",produces = MediaType.IMAGE_PNG_VALUE)
//    public ResponseEntity<byte[]> generateGhibliArtFromText(@RequestBody TextGenerationRequestDto requestDto){
//        try{
// byte [] imagesBytes=ghibliArtService.createGhibliArtFromText(requestDto.getPrompt(),requestDto.getStyle());
//        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(imagesBytes);
//
//
//        } catch (Exception e) {
//              e.printStackTrace();
//              return ResponseEntity.internalServerError().build();
//
//        }
//
//    }
//}
//
//package in.project.ghbliapi.controller;

import in.project.ghbliapi.dto.TextGenerationRequestDto;
import in.project.ghbliapi.service.GhibliArtService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
public class GenerationController {

    private final GhibliArtService ghibliArtService;

    // Constructor-based Dependency Injection
    public GenerationController(GhibliArtService ghibliArtService) {
        this.ghibliArtService = ghibliArtService;
    }

    // Image-to-image generation endpoint
    @PostMapping(value = "/generate", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> generateGhibliArt(
            @RequestParam("image") MultipartFile image,
            @RequestParam("prompt") String prompt) {
        try {
            byte[] imageBytes = ghibliArtService.createGhibliArt(image, prompt);
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_PNG)
                    .body(imageBytes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }

    // Text-to-image generation endpoint
    @PostMapping(value = "/generate-from-text", produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<byte[]> generateGhibliArtFromText(@RequestBody TextGenerationRequestDto requestDto) {
        try {
            byte[] imageBytes = ghibliArtService.createGhibliArtFromText(
                    requestDto.getPrompt(), requestDto.getStyle());
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_PNG)
                    .body(imageBytes);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }
}
