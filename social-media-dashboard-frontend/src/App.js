import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [socialMediaData, setSocialMediaData] = useState([]);

  useEffect(() => {
    const fetchSocialMediaData = async () => {
      try {
        const response = await axios.get('https://social-media-analytics-dashboard-backend.onrender.com/api/socialmedia');
        setSocialMediaData(response.data);
      } catch (error) {
        console.error('Error fetching social media data:', error);
      }
    };

    fetchSocialMediaData();
  }, []);

  const getChartData = (profile) => {
    return {
      labels: ['Followers', 'Following', 'Posts', 'Reached', 'Engaged', 'Saves', 'Comments', 'Shares'],
      datasets: [
        {
          label: `${profile.userDetails.name} - ${profile.platform}`,
          data: [
            profile.accountStats.followers,
            profile.accountStats.following,
            profile.accountStats.posts,
            profile.accountReach.reached,
            profile.accountReach.engaged,
            profile.contentStats.totalSaves,
            profile.contentStats.totalComments,
            profile.contentStats.totalShares,
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
  };

  return (
    <div className="App">
      <h1>Social Media Analytics Dashboard</h1>
      <div className="card-container">
        {socialMediaData.map((profile, index) => (
            <div className="profile-card">
              <div className="profile-header">
                <h2>{profile.userDetails.name}</h2>
              </div>
              <p>Platform: {profile.platform}</p>
              <p>Category: {profile.userDetails.category}</p>
              <p>Bio: {profile.userDetails.bio}</p>
              <p>Followers: {profile.accountStats.followers}</p>
              <p>Following: {profile.accountStats.following}</p>
              <p>Posts: {profile.accountStats.posts}</p>
            </div>
        ))}
      </div>
      <div className="detailed-info">
        {socialMediaData.map((profile, index) => (
          <div key={index} className="detailed-card">
            <h2>{profile.userDetails.name} - {profile.platform}</h2>
            <p>Contact: {profile.userDetails.contactOptions.email}, {profile.userDetails.contactOptions.phone}</p>
            <p>Links: <a href={profile.userDetails.links.website} target="_blank" rel="noopener noreferrer">Website</a>, <a href={profile.userDetails.links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p>Account Reached: {profile.accountReach.reached}</p>
            <p>Engaged Followers: {profile.accountReach.engaged}</p>
            <p>Total Stories: {profile.contentStats.totalStories}</p>
            <p>Total Follows: {profile.contentStats.totalFollows}</p>
            <p>Total Posts: {profile.contentStats.totalPosts}</p>
            <p>Total Saves: {profile.contentStats.totalSaves}</p>
            <p>Total Comments: {profile.contentStats.totalComments}</p>
            <p>Total Shares: {profile.contentStats.totalShares}</p>
            <p>Ads Run: {profile.adInsights.adsRun}</p>
            <p>Ad Reach: {profile.adInsights.adReach}</p>
            <p>Ad Engagement: {profile.adInsights.adEngagement}</p>
            <p>Ad Clicks: {profile.adInsights.adClicks}</p>
            <p>Ad Conversions: {profile.adInsights.adConversions}</p>
            <p>Active Promotions:</p>
            <ul>
              {profile.activePromotions.map((promo, idx) => (
                <li key={idx}>
                  {promo.promotionName} - {promo.startDate} to {promo.endDate}, {promo.discount}% discount
                </li>
              ))}
            </ul>
            <div className="chart-container">
              <Bar data={getChartData(profile)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
