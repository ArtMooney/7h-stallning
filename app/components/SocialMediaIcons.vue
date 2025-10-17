<template>
  <div class="flex items-center justify-center gap-2">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener">
      <IconFacebook
        class="h-6 min-h-6 w-6 min-w-6 opacity-50 transition-opacity duration-300 hover:opacity-100"
      />
    </a>

    <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
      <IconLinkedin
        class="h-6 min-h-6 w-6 min-w-6 opacity-50 transition-opacity duration-300 hover:opacity-100"
      />
    </a>

    <a href="https://www.youtube.com/" target="_blank" rel="noopener">
      <IconYoutube
        class="h-6 min-h-6 w-6 min-w-6 opacity-50 transition-opacity duration-300 hover:opacity-100"
      />
    </a>
  </div>
</template>

<script>
import IconFacebook from "~icons/fa/facebook-square";
import IconLinkedin from "~icons/fa/linkedin-square";
import IconYoutube from "~icons/fa/youtube-square";

export default {
  name: "SocialMediaIcons",

  components: {
    IconFacebook,
    IconLinkedin,
    IconYoutube,
  },
};
</script>
