<script setup>
useHead({
  htmlAttrs: {
    lang: "sv",
  },

  script: [
    {
      key: "schema-org-data",
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "",
        image: "",
        url: "",
        telephone: "",
        email: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "",
          postalCode: "",
          addressCountry: "SE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 0,
          longitude: 0,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "16:00",
        },
        description:
          "",
        sameAs: ["", ""],
        priceRange: "",
        areaServed: [
          "Kinna",
          "Marks kommun",
          "Borås",
          "Västra Götaland",
          "Sverige",
        ],
        serviceType: [
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "",
            description:
              "",
          },
        },
      }),
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
