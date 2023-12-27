import { onSnapshot } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const fetchEmotion = async (setEmotions, userEmail, selectedDate) => {
  try {
    if (selectedDate) {
      formattedDate = selectedDate.replace(/-/g, "/");
      const querySnapshot = await getDocs(
        query(
          collection(db, "emotion"),
          where("account", "==", userEmail),
          where("date", "==", formattedDate)
        )
      );
      const newEmotion = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEmotions(newEmotion);
    }
  } catch (error) {
    console.error("Error fetching emotion:", error);
  }
};

export const fetchTasksDate = (setAllTaskDate) => {
  try {
    const userEmail = getAuth().currentUser.email;
    if (userEmail) {
      const q = query(
        collection(db, "emotion"),
        where("account", "==", userEmail)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newTasks = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const allDates = newTasks.map((emotion) =>
          emotion.date.replace(/\//g, "-")
        );
        setAllTaskDate(allDates);
      });

      return unsubscribe;
    }
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
};
