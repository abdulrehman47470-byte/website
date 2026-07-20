import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  path: string;
  type?: string;
}

export function SEO({
  title,
  description,
  image = '/images/hero-instructor.jpg',
  path,
  type = 'website'
}: SEOProps) {
  const fullUrl = `https://biocareer.com${path}`;
  const fullImage = image.startsWith('http') ? image : `https://biocareer.com${image}`;

  return (
    <Helmet>
      <title>{title} | BioCareer</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="BioCareer" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Abd-Ur-Rehman Munir" />
      <meta name="keywords" content="biology, data science, bioinformatics, career guidance, courses, Abd-Ur-Rehman Munir" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BioCareer",
          "url": "https://biocareer.com",
          "logo": "https://biocareer.com/images/hero-instructor.jpg",
          "description": "Bridging biology and data science through comprehensive career guidance and courses.",
          "founder": {
            "@type": "Person",
            "name": "Abd-Ur-Rehman Munir",
            "jobTitle": "Founder & Instructor"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "biocareer12@gmail.com"
          },
          "sameAs": [
            "https://linkedin.com/in/abd-ur-rehman-munir",
            "https://github.com/abd-ur-rehman-munir"
          ]
        })}
      </script>
    </Helmet>
  );
}