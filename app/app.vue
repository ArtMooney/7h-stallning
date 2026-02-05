<script setup>
import { useStaticContentStore } from "~/stores/static-content.js";

const config = useRuntimeConfig();
const imageBaseUrl = config.public.imageBaseUrl;
const staticContentStore = useStaticContentStore();
await staticContentStore.loadContent();

useHead({
  script: [
    {
      key: "schema-org-data",
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "7H Ställning AB",
        image: `${imageBaseUrl}/man-on-scaffold.jpg`,
        url: "https://www.7hstallning.se",
        telephone: "+46733286381",
        email: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bergkullavägen 5",
          addressLocality: "Skene",
          postalCode: "511 62",
          addressCountry: "SE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 57.5073,
          longitude: 12.6946,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "16:00",
        },
        description:
          "7H Ställning AB erbjuder uthyrning och professionell montering av byggställningar i Kinna och Marks kommun. Moderna säkra ställningar, flexibla hyresperioder och snabb leverans. Vi erbjuder kompletta lösningar från uthyrning till montering för alla typer av projekt.",
        sameAs: [
          "https://www.facebook.com/profile.php?id=61576869093029",
          "https://www.instagram.com/7h_stallningab/",
        ],
        priceRange: "$$",
        areaServed: [
          "Kinna",
          "Skene",
          "Marks kommun",
          "Borås",
          "Västra Götaland",
          "Sverige",
        ],
        serviceType: [
          "Uthyrning av Byggställningar",
          "Professionell Montering av Byggställningar",
          "Säker Installation enligt Gällande Regler",
          "Byggställningsrådgivning",
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Uthyrning och Montering av Byggställningar",
            description:
              "Kompletta ställningslösningar med moderna och säkra byggställningar, professionell montering, flexibla hyresperioder och kostnadsfria offerter. Vi erbjuder tjänster för alla typer av byggprojekt oavsett storlek.",
          },
        },
        employee: [
          {
            "@type": "Person",
            name: "Kristoffer",
            telephone: "+46733286381",
            jobTitle: "Kontaktperson",
          },
          {
            "@type": "Person",
            name: "Tobias",
            telephone: "+46704770070",
            jobTitle: "Kontaktperson",
          },
        ],
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
