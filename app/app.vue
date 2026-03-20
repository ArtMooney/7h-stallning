<script setup>
import { useStaticContentStore } from "~/stores/static-content.js";

const config = useRuntimeConfig();
const imageBaseUrl = config.public.imageBaseUrl;
const staticContentStore = useStaticContentStore();
await staticContentStore.loadContent();
const pageContent = computed(
  () => staticContentStore.getContentByTitle("page - Index").content,
);
const companyInfo = computed(
  () =>
    staticContentStore.getContentByTitle("Component - CompanyInfo").content,
);
const seoContent = computed(
  () => staticContentStore.getContentByTitle("SEO page - Index").content,
);

useHead({
  script: [
    {
      key: "schema-org-data",
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: companyInfo.value?.company || "",
        image: `${imageBaseUrl}/cms-files/${pageContent.value?.heading?.image || ""}`,
        url: config.public.publicSiteUrl || "",
        telephone: companyInfo.value?.phone || "",
        email: companyInfo.value?.email1 || "",
        address: {
          "@type": "PostalAddress",
          streetAddress: companyInfo.value?.address || "",
          addressLocality: companyInfo.value?.address2 || "",
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
        description: seoContent.value?.description || "",
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
          pageContent.value?.services?.listTitle1 || "",
          pageContent.value?.services?.listTitle2 || "",
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: seoContent.value?.ogTitle || "",
            description: seoContent.value?.ogDescription || "",
          },
        },
        employee: [
          {
            "@type": "Person",
            name: pageContent.value?.contact?.phoneName1 || "",
            telephone: pageContent.value?.contact?.phoneNumber1 || "",
            email: pageContent.value?.contact?.email1 || "",
            jobTitle: "Kontaktperson",
          },
          {
            "@type": "Person",
            name: pageContent.value?.contact?.phoneName2 || "",
            telephone: pageContent.value?.contact?.phoneNumber2 || "",
            email: pageContent.value?.contact?.email2 || "",
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
