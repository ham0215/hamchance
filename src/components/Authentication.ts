import authentication from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDSl6UOOMjjNJBVu6BsiBnmHS7K5WMbsBQ',
  authDomain: 'amiable-bridge-235015.firebaseapp.com',
};
authentication.initializeApp(firebaseConfig, 'authentication');

export default authentication;
