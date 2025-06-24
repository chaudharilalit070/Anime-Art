
package in.project.ghbliapi.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public class TextToImageRequest {

    @JsonProperty("text_prompts")
    private List<TextPrompt> textPrompts;

    @JsonProperty("cfg_scale")
    private double cfgScale = 7;

    private int height = 512;
    private int width = 768;
    private int samples = 1;
    private int steps = 30;

    @JsonProperty("style_preset")
    private String stylePreset;

    // Constructor for manual creation
    public TextToImageRequest(String text, String style) {
        this.textPrompts = List.of(new TextPrompt(text));
        this.stylePreset = style;
    }

    // Default constructor (needed for Jackson deserialization)
    public TextToImageRequest() {}

    // Getters
    public List<TextPrompt> getTextPrompts() {
        return textPrompts;
    }

    public double getCfgScale() {
        return cfgScale;
    }

    public int getHeight() {
        return height;
    }

    public int getWidth() {
        return width;
    }

    public int getSamples() {
        return samples;
    }

    public int getSteps() {
        return steps;
    }

    public String getStylePreset() {
        return stylePreset;
    }

    // Setters
    public void setTextPrompts(List<TextPrompt> textPrompts) {
        this.textPrompts = textPrompts;
    }

    public void setCfgScale(double cfgScale) {
        this.cfgScale = cfgScale;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public void setSamples(int samples) {
        this.samples = samples;
    }

    public void setSteps(int steps) {
        this.steps = steps;
    }

    public void setStylePreset(String stylePreset) {
        this.stylePreset = stylePreset;
    }

    // Static inner class for text prompts
    public static class TextPrompt {
        private String text;

        public TextPrompt() {}

        public TextPrompt(String text) {
            this.text = text;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }
}
