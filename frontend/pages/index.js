import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
// import { useRouter } from "next/router"
// import { useTranslation } from "next-i18next"
// import { serverSideTranslations } from "next-i18next/serverSideTranslations"

// import column1 from "../public/column1.png";
// import column2 from "../public/column2.png";
// import column3 from "../public/column3.png";
// import spa from "../public/spa.png";
// import spa2 from "../public/spa2.png";
// import office from "../public/office1.jpg";

const Home = ({ articles, categories, homepage }) => {
  // const router = useRouter()
  // const { t } = useTranslation("common")
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />

      <div className="video-wrapper">
        <video autoPlay playsInline loop muted>
          <source
            src="https://blossom-assets.s3.eu-central-1.amazonaws.com/video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <section className="intro-section">
        <div className="intro-section_content">
          {/* <h1>{homepage.attributes.header}</h1> */}
          <h2 className="section-heading_small">
            Welcome to Angel Stradom Hotel, located in the beautiful city of
            Krakow. Our luxurious hotel and apartment facilities offer the
            ultimate in comfort and style.
          </h2>
        </div>
        <div className="image-container">
          <Image className="image" layout="fill" src="/column1.png" />
          <Image className="image" layout="fill" src="/column2.png" />
          <Image className="image" layout="fill" src="/column3.png" />
        </div>
      </section>
      <section className="bedrooms-section">
        <div className="bedrooms-image-container">
          <Image className="image" layout="fill" src="/spa.png" />
        </div>
        <div className="bedrooms-section_content">
          <h2 className="section-heading">Bedrooms & loft</h2>
          <p>
            Our guest rooms are spacious and beautifully appointed, with
            high-end finishes and all the modern amenities you need for a
            relaxing stay. From plush bedding to flat-screen TVs and minibars,
            we have thought of everything to ensure your comfort.
          </p>
          <p>
            Our apartments are the perfect choice for longer stays or for those
            who want a bit more space and privacy. They come equipped with
            fully-equipped kitchens and separate living and sleeping areas, so
            you can feel right at home.
          </p>
          <Link className="readmore" href="/">
            read more
          </Link>
        </div>
      </section>
      <div className="dining-section">
        <h2 className="section-heading">Eat & drink</h2>
        <div className="dining-section_images">
          <div className="dining-section_images-card">
            <Image className="image" layout="fill" src="/column1.png" />
            <h3>Gaia Restaurant</h3>
            <p>
              At Angel Stradom Hotel, we pride ourselves on offering the best in
              luxury accommodations and top-notch service. We look forward to
              welcoming you to our beautiful property and helping you make the
              most of your stay in Krakow.
            </p>
            <Link className="readmore" href="/">
              discover more
            </Link>
          </div>
          <div className="dining-section_images-card">
            <Image className="image" layout="fill" src="/column2.png"/>
            <h3>John Dory Restaurant</h3>
            <p>
              At Angel Stradom Hotel, we pride ourselves on offering the best in
              luxury accommodations and top-notch service. We look forward to
              welcoming you to our beautiful property and helping you make the
              most of your stay in Krakow.
            </p>
            <Link className="readmore" href="/">
              discover more
            </Link>
          </div>
          <div className="dining-section_images-card">
            <Image className="image" layout="fill" src="/column3.png" />
            <h3>Hedwig&apos;s Bar</h3>
            <p>
              At Angel Stradom Hotel, we pride ourselves on offering the best in
              luxury accommodations and top-notch service. We look forward to
              welcoming you to our beautiful property and helping you make the
              most of your stay in Krakow.
            </p>
            <Link className="readmore" href="/">
              discover more
            </Link>
          </div>
        </div>
      </div>
      <section className="quote-section">
        <h3 className="section-heading_small">
          But our luxurious accommodations are just the beginning. At Angel
          Stradom Hotel, we also offer a range of on-site amenities to help you
          make the most of your stay. Relax in our indoor pool, work up a sweat
          in our fitness center, or indulge in a treatment at our spa.
        </h3>
      </section>
      <div className="wellness-section">
        <h2 className="section-heading">S??L wellness</h2>
        <div className="wellness-section_images">
          <div className="wellness-section_images-card">
            <Image className="image" layout="fill" src="/spa.png"/>
            <h3>SPA</h3>
            <p>
              At Angel Stradom Hotel, we pride ourselves on offering the best in
              luxury accommodations and top-notch service. We look forward to
              welcoming you to our beautiful property and helping you make the
              most of your stay in Krakow.
            </p>
            <Link className="readmore" href="/">
              discover more
            </Link>
          </div>
          <div className="wellness-section_images-card">
            <Image className="image" layout="fill" src="/spa2.png" />
            <h3>Fitness</h3>
            <p>
              At Angel Stradom Hotel, we pride ourselves on offering the best in
              luxury accommodations and top-notch service. We look forward to
              welcoming you to our beautiful property and helping you make the
              most of your stay in Krakow.
            </p>
            <Link className="readmore" href="/">
              discover more
            </Link>
          </div>
        </div>
      </div>
      <section className="work-section">
        <h2 className="section-heading">
          Work & <span>celebrate</span>
        </h2>
        <div className="work-section_content">
          <div className="detail-table">
            <div className="detail-table_row">
              <span className="detail-table_column left">Open space desk</span>
              <span className="detail-table_column right">100</span>
            </div>
            <div className="detail-table_row">
              <span className="detail-table_column left">Conference rooms</span>
              <span className="detail-table_column right">15</span>
            </div>
            <div className="detail-table_row">
              <span className="detail-table_column left">
                Celebration rooms
              </span>
              <span className="detail-table_column right">5</span>
            </div>
            <div className="detail-table_row">
              <span className="detail-table_column left">Customized menu</span>
              <span className="detail-table_column right">Yes</span>
            </div>
          </div>
          <div className="work-paragraph">
            <p>
              We are also located in a prime location, just a short distance
              from some of Cracows top attractions. Explore the historic Old
              Town, visit the iconic Wawel Castle, or stroll through the
              beautiful gardens of the Planty Park. We are also located in a
              prime location, just a short distance from some of Cracows top
              attractions. Explore the historic Old Town, visit the iconic Wawel
              Castle, or stroll through the beautiful gardens of the Planty
              Park.
            </p>
          </div>
        </div>
        <div className="work-section_images">
          <div className="work-section_images-card">
            <Image className="image" layout="fill" src="/spa2.png" />
          </div>
          <div className="work-section_images-card">
            <Image className="image" layout="fill" src="/office1.jpg"/>
          </div>
        </div>
        <div className="cta-wrapper">
          <Link className="cta cta-empty" href="/">
            spaces
          </Link>
          <Link className="cta cta-full" href="/">
            make enquiry
          </Link>
        </div>
      </section>
      <section className="discover">
        <div className="discover-wrapper">
          <div className="discover-wrapper_gallery">
            
            <img className="discover-image"  src="/krk1.jpeg"/>
            <img className="discover-image"  src="/krk2.jpeg"/>
            <img className="discover-image"  src="/krk3.jpeg"/>
            <img className="discover-image"  src="/krk4.jpeg"/>
          </div>
          <div className="discover-wrapper_content">
            <div className="discover-wrapper_content-inner">
              <h2 className="section-heading">
                Discover
              </h2>
              <p>One of the first things that visitors notice about Krak??w is its stunning architecture. The city is home to a number of beautiful churches and cathedrals, including the Wawel Cathedral, which dates back to the 14th century. The Old Town, with its cobblestone streets and medieval buildings, is a must-see for anyone visiting Krak??w.</p>
              <p>In addition to its rich history, Krak??w is also home to a thriving arts scene. The city has a number of galleries and museums that showcase the work of both local and international artists. The National Museum in Krak??w is a particular highlight, with its extensive collection of Polish art and artifacts.</p>
              <p>But Krak??w is not just a city for history and culture buffs. It is also a place for foodies, with a wide range of restaurants and cafes serving everything from traditional Polish cuisine to international fare.</p>
              <Link className="readmore" href="/">
              discover more
            </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ["common"]),
//   },
// })

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
        header: "*",
        backgroundVideo: "*",
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
