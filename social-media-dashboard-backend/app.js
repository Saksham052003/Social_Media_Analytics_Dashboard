const express = require('express')
const cors = require('cors')
const app = express()
const PORT= process.env.PORT || 5000

app.use(cors())

const socialMediaData = [
    {
        platform: "Instagram",
        userDetails: {
          name: "User",
          category: "Influencer",
          bio: "Social media marketer",
          bio: "Social media enthusiast",
          contactOptions: {
            email: "user@example.com",
            phone: "123-456-7890"
          },
          links: {
            website: "https://instagram.com/"
          }
        },
        accountStats: {
          followers: 1000,
          following: 500,
          posts: 200
        },
        accountReach: {
          reached: 5000,
          engaged: 2000,
          followerGrowth: 10
        },
        contentStats: {
          totalPosts: 200,
          totalStories: 50,
          totalFollows: 100,
          totalSaves: 500,
          totalComments: 2000,
          totalShares: 1000
        },
        adInsights: {
          adsRun: 5,
          adReach: 10000,
          adEngagement: 500,
          adClicks: 200,
          adConversions: 10
        },
        activePromotions: [
          {
            promotionName: "Summer Sale",
            startDate: "2022-06-01",
            endDate: "2022-06-30",
            discount: 20
          },
          {
            promotionName: "Black Friday",
            startDate: "2022-11-25",
            endDate: "2022-11-27",
            discount: 30
          }
        ]
      },
      {
        platform: "Facebook",
        userDetails: {
          name: "User",
          category: "Business",
          bio: "Social media marketer",
          contactOptions: {
            email: "user@example.com",
            phone: "123-456-7890"
          },
          links: {
            website: "https://facebook.com"
          }
        },
        accountStats: {
            followers: 2000,
            following: 500,
            posts: 200
          },
        accountReach: {
          reached: 10000,
          engaged: 5000,
          pageLikeGrowth: 20
        },
        contentStats: {
          totalPosts: 100,
          totalFollows: 100,
          totalSaves: 50,
          totalStories: 30,
          totalShares: 500,
          totalComments: 2000,
          totalReactions: 1000
        },
        adInsights: {
          adsRun: 10,
          adReach: 20000,
          adEngagement: 1000,
          adClicks: 500,
          adConversions: 20
        },
        activePromotions: [
          {
            promotionName: "Summer Sale",
            startDate: "2022-06-01",
            endDate: "2022-06-30",
            discount: 20
          },
          {
            promotionName: "Black Friday",
            startDate: "2022-11-25",
            endDate: "2022-11-27",
            discount: 30
          }
        ]
      },
      {
        platform: "Twitter",
        userDetails: {
          name: "User",
          category: "Influencer",
          bio: "Social media enthusiast",
          contactOptions: {
            email: "user@example.com",
            phone: "123-456-7890"
          },
          links: {
            website: "https://twitter.com"
          }
        },
        accountStats: {
          followers: 5000,
          following: 2000,
          posts: 1000
        },
        accountReach: {
          reached: 20000,
          engaged: 10000,
          followerGrowth: 50
        },
        contentStats: {
          totalPosts: 1000,
          totalStories: 30,
          totalFollows: 100,
          totalShares: 500,
          totalLikes: 2000,
          totalSaves: 60,
          totalComments: 1000
        },
        adInsights: {
          adsRun: 10,
          adReach: 20000,
          adEngagement: 1000,
          adClicks: 500,
          adConversions: 20
        },
        activePromotions: [
          {
            promotionName: "Summer Sale",
            startDate: "2022-06-01",
            endDate: "2022-06-30",
            discount: 20
          },
          {
            promotionName: "Black Friday",
            startDate: "2022-11-25",
            endDate: "2022-11-27",
            discount: 30
          }
        ]
      }
]

app.get('/api/socialmedia', (req, res) => {
    res.json(socialMediaData)
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}/api/socialmedia`)
})