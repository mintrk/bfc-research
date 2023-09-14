// sessionStorage.ts

// Function to set data in sessionStorage
export const setSessionData = (key: string, data: any) => {
  try {
    const serializedData = JSON.stringify(data);
    sessionStorage.setItem(key, serializedData);
  } catch (error) {
    console.error("Error setting session data:", error);
  }
  console.log("--- set session ---");
};

// Function to get data from sessionStorage
export const getSessionData = (key: string) => {
  try {
    const serializedData = sessionStorage.getItem(key);
    if (serializedData === null) {
      return null;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error("Error getting session data:", error);
    return null;
  }
};

// Function to remove data from sessionStorage
export const removeSessionData = (key: string) => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing session data:", error);
  }
};
