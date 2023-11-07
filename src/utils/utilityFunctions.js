
import {
  USER_TOKEN,
  TOKEN_EXPIRY_DATE,
//   MSG,
  PERSONALITY_ID,
  USER_ID,
  INVITED_ITINERARY_ID,
  INVITED_USER_ID,
  IS_INVITED_USER_TRAVEL_QUIZ_COMPLETED,
} from "../Constant";

const desktopImages = [
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "d10",
  "d11",
  "d12",
  "d13",
  "d14",
  "d15",
  "d16",
  "d17",
  "d18",
];
const mobileImages = [
  "m1",
  "m2",
  "m3",
  "m4",
  "m5",
  "m6",
  "m7",
  "m8",
  "m9",
  "m10",
  "m11",
  "m12",
  "m13",
  "m14",
  "m15",
  "m16",
  "m17",
  "m18",
];


export const containsSpecialChars = (str) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
};

export const isContainOneLetter = (str) => {
  const regex = /[a-zA-Z]/;
  return regex.test(str);
};

export const isUserLoggedIn = () => {
  return !!localStorage.getItem(USER_TOKEN);
};

export const emailValidation = (value) => {
  let errorMessage;
  if (!value) {
    errorMessage = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address";
  }
  return errorMessage;
};

export const setAccessTokenAndExpiry = (token, isExpiryStore) => {
  const next30Days = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
  localStorage.setItem(USER_TOKEN, token);
  localStorage.setItem(TOKEN_EXPIRY_DATE, isExpiryStore ? next30Days : "");
};


export const getRandomImage = (isMobileView) => {
  const randomValue = Math.floor(Math.random() * 18);
  if (isMobileView) {
    return `${process.env.REACT_APP_CDN_URL}mobile/${mobileImages[randomValue]}.png`;
  }

  return `${process.env.REACT_APP_CDN_URL}desktop/${desktopImages[randomValue]}.png`;
};

export const handleScroll = (id) => {
  const element = document.querySelector(`#${id}`);
  element.scrollIntoView({ behavior: "smooth" });
};

export const setExpiryToken = () => {
  const next30Days = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
  const expiresIn = next30Days.getTime();
  localStorage.setItem(TOKEN_EXPIRY_DATE, expiresIn);
};

export const isTokenExpired = () => {
  const currentTime = new Date().getTime();
  const expiredTime = localStorage.getItem(TOKEN_EXPIRY_DATE);

  if (expiredTime) {
    if (currentTime >= expiredTime) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};


export const getFileExtensionOfImage = (filename) => {
  const fileExtensions = filename.split(".");
  return fileExtensions.length > 1 ? "." + fileExtensions.pop() : "";
};

export const storePersonalityId = (id) => {
  localStorage.setItem(PERSONALITY_ID, id);
};

export const getPersonalityId = () => {
  return localStorage.getItem(PERSONALITY_ID);
};

export const removePersonalityId = () => {
  localStorage.removeItem(PERSONALITY_ID);
};

export const getUserId = () => {
  return localStorage.getItem(USER_ID);
};
export const formatDateToMonthYear = (createdAt) => {
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long" };
  const formattedDate = date.toLocaleDateString(undefined, options);
  return formattedDate;
};
export const convertToBase64 = (imgUrl) => {
  return new Promise((resolve, reject) => {
    if (imgUrl) {
      fetch(imgUrl)
        .then((response) => {
          if (response.ok) {
            return response.blob();
          } else {
            reject(new Error("Failed to fetch the image"));
          }
        })
        .then((imageBlob) => {
          const reader = new FileReader();
          reader.readAsDataURL(imageBlob);
          reader.onloadend = () => {
            resolve(reader.result);
          };
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      return null;
    }
  });
};
// export const downloadPdf = async () => {
//   const input = document.getElementById("pdf-content");
//   if (!input) {
//     return;
//   }
//   if (input) {
//     const pdf = new jsPDF("p", "pt", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = pdf.internal.pageSize.getHeight();

//     const canvas = await html2canvas(input, { scale: 2 });

//     const maxSizeInBytes = 1024 * 1024;
//     const scaleFactor = Math.min(
//       1,
//       Math.sqrt(maxSizeInBytes / (canvas.width * canvas.height))
//     );

//     const imgData = canvas.toDataURL("image/jpeg", 0.7);
//     const imgWidth = canvas.width * scaleFactor;
//     const imgHeight = canvas.height * scaleFactor;

//     let positionX = (pdfWidth - imgWidth) / 2;
//     let positionY = 0;
//     const pageHeight = pdfHeight;

//     while (positionY < imgHeight) {
//       if (positionY !== 0) {
//         pdf.addPage();
//       }
//       pdf.addImage(imgData, "JPEG", positionX, -positionY, imgWidth, imgHeight);
//       positionY += pageHeight;
//     }

//     pdf.save("generated.pdf");
//   }
// };

export const useSetInvitedUserParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const invitedItineraryId = urlParams.get("id");
  const invitedUserId = urlParams.get("userId");
  // if (invitedItineraryId && invitedUserId) {
  //   // localStorage.setItem(INVITED_ITINERARY_ID, invitedItineraryId);
  //   // localStorage.setItem(INVITED_USER_ID, invitedUserId);

  //   return { invitedItineraryId, invitedUserId };
  // }
  return { invitedItineraryId, invitedUserId };
};

export const getInvitedUserId = () => {
  return localStorage.getItem(INVITED_USER_ID);
};

export const getItineraryId = () => {
  return localStorage.getItem(INVITED_ITINERARY_ID);
};

export const setIsInvitedUserTravelQuizCompleted = (value) => {
  localStorage.setItem(IS_INVITED_USER_TRAVEL_QUIZ_COMPLETED, value);
};

export const getIsInvitedUserTravelQuizCompleted = () => {
  return localStorage.getItem(IS_INVITED_USER_TRAVEL_QUIZ_COMPLETED);
};

export const removeInvitedUserDetails = () => {
  localStorage.removeItem(INVITED_USER_ID);
  localStorage.removeItem(INVITED_ITINERARY_ID);
  localStorage.removeItem(IS_INVITED_USER_TRAVEL_QUIZ_COMPLETED);
};

export const getCode = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get("code");
  return code;
};

export const setInvitedUserDetails = (invitedItineraryId, invitedUserId) => {
  if (invitedItineraryId && invitedUserId) {
    localStorage.setItem(INVITED_ITINERARY_ID, invitedItineraryId);
    localStorage.setItem(INVITED_USER_ID, invitedUserId);
  }
};

export const appendQueryParametersInImage = (url) => {
  const hasQuery = url.includes("?");
  const separator = hasQuery ? "&" : "?";
  return `${url}${separator}w=2500&q=40`;
};

export const reduceImageQuality = (url, w = 600, q = 40) => {
  const hasQuery = url.includes("?");
  const separator = hasQuery ? "&" : "?";
  return `${url}${separator}w=${w}&q=${q}`;
};

export const roundToNearestValue = (x) => Math.round(x / 100) * 100;

// export const handleRedirectionToQuizPage = (navigate) => {
//   const data = store?.getState()?.user;
//   if (getPersonalityId() || data?.userDetails?.personalityType?._id) {
//     if (getInvitedUserId()) {
//       return navigate(ROUTES?.travelQuiz);
//     }
//     return navigate(ROUTES?.travelStyle);
//   }
//   return navigate(ROUTES?.personality);
// };
