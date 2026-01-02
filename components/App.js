import { FiSearch } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { MdHelpOutline } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://media-assets.swiggy.com/fl_lossy,f_auto,q_auto,w_96,h_96/portal/m/logo_192x192.png"/>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li><FiSearch className="icon"/> Search</li>
          <li><BiSolidOffer className="icon"/> Offers</li>
          <li><MdHelpOutline className="icon"/> Help</li>
          <li><FaUserCircle className="icon"/> Sign In</li>
          <li><BsCart3 className="icon"/> Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = (props) => {
 const {resData:{info:{name,cloudinaryImageId,cuisines,avgRating,sla:{deliveryTime},aggregatedDiscountInfoV3:{header,subHeader}}}} = props;
  return (
    <div className="restro-card"> 
      <img className="restro-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>⭐{avgRating}</h4>
      <h4>{deliveryTime} mins</h4>
      <h2>{header} {subHeader}</h2>
    </div>
  )
};

const resObj = [{
                    "info": {
                      "id": "725082",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/465721bd-24d0-477a-9bfc-6277a45addfa_725082.JPG",
                      "locality": "Kankarbagh",
                      "areaName": "Kankarbagh",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.0K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-03 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "243"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/pizza-hut-kankarbagh-rest725082",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "591085",
                      "name": "0612 Road Chef Online",
                      "cloudinaryImageId": "qo1ypqreeaulytd7cmgr",
                      "locality": "Sanjay Nagar Road",
                      "areaName": "Kankarbagh",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Chinese",
                        "Biryani"
                      ],
                      "avgRating": 4.4,
                      "parentId": "618983",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "20K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-03 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/0612-road-chef-online-sanjay-nagar-road-kankarbagh-rest591085",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "650233",
                      "name": "Veer Ji Malai Chaap Wale",
                      "cloudinaryImageId": "ea5e6f3521a1b76de25f43be8b43b4bd",
                      "locality": "Kankarbagh",
                      "areaName": "Kankarbagh",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Tandoor",
                        "Snacks",
                        "Biryani"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "parentId": "12056",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1.9K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-03 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹149"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.7",
                          "ratingCount": "381"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/veer-ji-malai-chaap-wale-kankarbagh-rest650233",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "87401",
                      "name": "Amrapali Cafe",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/19/5a410b09-7813-4ac0-8b69-29de90458508_87401 (1).jpg",
                      "locality": "Beer Chand Patel Marg",
                      "areaName": "Fraser Road",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.4,
                      "parentId": "31959",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "14K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-02 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/amrapali-cafe-beer-chand-patel-marg-fraser-road-rest87401",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "591316",
                      "name": "Dum Safar Biryani",
                      "cloudinaryImageId": "mx8rsghjmgkry6untloe",
                      "locality": "Patna One Mall",
                      "areaName": "Fraser Road",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "North Indian",
                        "Barbecue"
                      ],
                      "avgRating": 4.3,
                      "parentId": "351013",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.2K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-02 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹88"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/dum-safar-biryani-one-mall-fraser-road-rest591316",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "373159",
                      "name": "Sweet Truth",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/30/66abd464-3544-431c-ae4e-bac64d03b6d2_373159.JPG",
                      "locality": "BAHADURPUR HOUSING COLONY",
                      "areaName": "Kankarbagh",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Bakery",
                        "Beverages"
                      ],
                      "avgRating": 4.5,
                      "parentId": "4444",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.6K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-02 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹199"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/sweet-truth-bahadurpur-housing-colony-kankarbagh-rest373159",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "622617",
                      "name": "Wow! Momo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/fcf82def-a3b3-4040-b430-25b6e2a8e741_622617.JPG",
                      "locality": "Lodipur",
                      "areaName": "Lodipur",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Momos",
                        "Chinese",
                        "fastfood",
                        "Asian",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "1776",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "1.2K+",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-02 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Chinese.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/wow-momo-lodipur-rest622617",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "373155",
                      "name": "Faasos - Wraps, Rolls & Shawarma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/d83abf38-26f4-4ef0-a842-8e6f38726cac_373155.JPG",
                      "locality": "BAHADURPUR HOUSING COLONY",
                      "areaName": "Kankarbagh",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "21809",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.6K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-02 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Rolls.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "select": true,
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/faasos-wraps-rolls-and-shawarma-bahadurpur-housing-colony-kankarbagh-rest373155",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "373156",
                      "name": "Behrouz Biryani",
                      "cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
                      "locality": "BAHADURPUR HOUSING COLONY",
                      "areaName": "Kankarbagh",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Kebabs",
                        "Mughlai",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "1803",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.2K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "5.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-02 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/behrouz-biryani-bahadurpur-housing-colony-kankarbagh-rest373156",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "98316",
                      "name": "Ji Hujur",
                      "cloudinaryImageId": "kvfwtvzpsbszpq9wgn1c",
                      "locality": "Kankarbagh",
                      "areaName": "Kankarbagh",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Indian",
                        "Chinese",
                        "Biryani"
                      ],
                      "avgRating": 4.1,
                      "parentId": "110876",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "28K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-02 22:25:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.6",
                          "ratingCount": "574"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/ji-hujur-kankarbagh-rest98316",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "779700",
                      "name": "Bakingo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/2/05c80437-7f6c-4410-b600-c48790848149_779700.JPG",
                      "locality": "Patel Nagar",
                      "areaName": "DRB- BhattaCharya Road",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "Snacks"
                      ],
                      "avgRating": 4.7,
                      "parentId": "3818",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "7.1K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "9.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-03 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/bakingo-patel-nagar-drb-bhattacharya-road-rest779700",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "81235",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/4ffa33e3-acbd-4dd5-b573-98a33d60176b_81235.JPG",
                      "locality": "Kankarbagh",
                      "areaName": "Kankarbagh",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "11K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-03 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "8.4K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/kfc-kankarbagh-rest81235",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "254135",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/041acbd3-37b1-4d3c-9aa3-9aa86c67d584_254135.JPG",
                      "locality": "Gardanibagh",
                      "areaName": "Golambar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "630",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "23K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-03 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "24K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/mcdonalds-gardanibagh-golambar-rest254135",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "659726",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c89d5b33-c97a-4cf7-9db3-69865ddade8e_659726.jpg",
                      "locality": "Christian Colony",
                      "areaName": "Fraser Road",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "3.1K+",
                      "sla": {
                        "deliveryTime": 37,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-02 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹48"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-3a5a198e-edc9-413b-8f76-07e2daff78cc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/patna/burger-king-christian-colony-fraser-road-rest659726",
                      "type": "WEBLINK"
                    }
                  }
                ];



const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" placeholder="Search for restaurants and food" />
        <button className="search-btn">Search</button>
      </div>
      <div className="restro-container">
        <RestroCard resData={resObj[0]}/>
        <RestroCard resData={resObj[1]}/>
        <RestroCard resData={resObj[2]}/>
        <RestroCard resData={resObj[3]}/>
        <RestroCard resData={resObj[4]}/>
        <RestroCard resData={resObj[5]}/>
        <RestroCard resData={resObj[6]}/>
        <RestroCard resData={resObj[7]}/>
        <RestroCard resData={resObj[8]}/>
        <RestroCard resData={resObj[9]}/>


      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
        <Header />
        <Body />
    </div>

  )
};

export default App;