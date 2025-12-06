# Hero Image Placeholder

## Required Hero Image

**File name**: `hero-livboss-broccoli.jpg`

**Location**: Place this file in `/public/images/` directory

### Image Specifications

- **Format**: JPG or WebP
- **Dimensions**: Minimum 1920x1080px (Full HD) or 2560x1440px (2K) for best quality
- **Aspect Ratio**: 16:9 or wider
- **File Size**: Optimized (under 500KB recommended)

### Visual Style Guidelines

The hero image should capture a **luxury Louis Vuitton aesthetic** combined with the **broccoli sprout liver health theme**:

#### Composition Ideas:
1. **Still-life luxury shot**:
   - Premium glass bottle of LivBoss supplement
   - Fresh broccoli sprouts arranged elegantly
   - Soft, warm lighting (LV-orange golden hour tones)
   - Marble or high-end textured surface
   - Shallow depth of field

2. **Nature + luxury fusion**:
   - Close-up of vibrant green broccoli sprouts with water droplets
   - Soft bokeh background with warm LV-orange/golden light
   - Premium product packaging partially visible
   - Clean, minimalist composition

3. **Lifestyle elegance**:
   - Upscale modern kitchen or wellness space
   - Natural morning light streaming through
   - LivBoss bottle placed tastefully
   - Fresh ingredients including broccoli sprouts
   - Warm color palette (creams, golds, soft greens)

#### Color Palette:
- **Primary**: Warm golden/LV-orange light tones (#F28A1A, #D6730E)
- **Secondary**: Fresh green from broccoli sprouts
- **Accents**: Champagne gold, warm whites, soft browns
- **Background**: Soft focus, creamy bokeh

#### Mood:
- Elegant and sophisticated
- Natural yet luxurious
- Warm and inviting
- Premium health/wellness
- NOT clinical or pharmaceutical-looking
- Think: Dior/Chanel/Louis Vuitton product photography

### Temporary Placeholder

Until you have the final image, you can:
1. Use a high-quality stock photo matching the style above
2. Create a simple gradient placeholder
3. Use Midjourney/DALL-E to generate an image with prompt:
   ```
   Luxury product photography, broccoli sprouts on marble surface, 
   golden hour lighting, LV style, warm orange tones, shallow depth of field, 
   elegant composition, premium health supplement aesthetic, 
   cinematic lighting, 8k quality --ar 16:9 --style raw
   ```

### Current Behavior

The `HeroSection` component uses Next.js `<Image>` with:
- `fill` property for responsive full-bleed
- `object-cover` for proper cropping
- `priority` for fastest loading
- Gradient overlay for text readability

If the image is missing, Next.js will show a placeholder until you add the file.

---

**Quick Setup**: Drop your hero image as `hero-livboss-broccoli.jpg` in the `/public/images/` folder and refresh the page.
