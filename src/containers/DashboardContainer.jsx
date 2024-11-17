import React, { useEffect, useState } from "react";
import DashboardComponent from "../components/DasboardComponent";
import {
  getArticleData,
  getContactData,
  getSubscribeEmail,
  getTestimonial,
  getPortfolio,
  getTeamsData,
} from "../utils/api";

const DashboardContainer = () => {
  const [testimonialCount, setTestimonialCount] = useState(0);
  const [portfolioCount, setPortfolioCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [articleCount, setArticleCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [subscribeCount, setSubscribeCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testimonialResponse = await getTestimonial();
        setTestimonialCount(testimonialResponse.data.data.length);

        const portfolioResponse = await getPortfolio();
        setPortfolioCount(portfolioResponse.data.data.length);

        const teamResponse = await getTeamsData();
        setTeamCount(teamResponse.data.data.length);

        const articleResponse = await getArticleData();
        setArticleCount(articleResponse.data.data.length);

        const contactResponse = await getContactData();
        setContactCount(contactResponse.data.data.length);

        const subscribeResponse = await getSubscribeEmail();
        setSubscribeCount(subscribeResponse.data.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <DashboardComponent
        testimonialCount={testimonialCount}
        portfolioCount={portfolioCount}
        teamCount={teamCount}
        articleCount={articleCount}
        contactCount={contactCount}
        subscribeCount={subscribeCount}
      />
    </>
  );
};

export default DashboardContainer;
