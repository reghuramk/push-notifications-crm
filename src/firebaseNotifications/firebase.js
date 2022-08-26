// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDiOuUDchpOEqyRcq6l12IGWSRKKDJpC4k",
  authDomain: "sample-counter-project.firebaseapp.com",
  projectId: "sample-counter-project",
  storageBucket: "sample-counter-project.appspot.com",
  messagingSenderId: "622860274411",
  appId: "1:622860274411:web:0383640f94417914944cae",
  measurementId: "G-W8XDZXZ192"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BLfSSXbJYK21OoRk2JF_ceRmd7xHGQlrVsisutIvmNbZNfN9pfCg4bVIRvhPhPSC_lrKT7piXKcVVgq2MaPu3Oo` })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

  
