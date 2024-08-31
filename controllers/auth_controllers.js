import { Client,Account,ID,Functions, OAuthProvider } from 'appwrite';

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
.setProject('6683dcb7003b64e8be7c')              // Your project ID

const account = new Account(client);

// complete verification for the client
export const updateVerification = async (userId, secret) => {
    try{
       const response=await account.updateVerification(userId, secret);
         console.log(response); // Success
            return response;
    }
    catch(error){
        console.log(error); // Failure
        throw error;
    }
}

// update and reset the password
export const updateNewPassword = async (userId, secret, password,password_confirm) => {
    try {
        const response = await account.updateRecovery(userId, secret, password,password_confirm);
        console.log(response); // Success
        return response;
    } catch (error) {
        console.log(error); // Failure
        throw error;
    }
};


export const SignInWithGoogle = async () => {
    try {
        const result = account.createOAuth2Session(
            OAuthProvider.Google,
            'https://verification-and-recovery.onrender.com/sign-in-with-google',
            ["profile", "email"]
        )
        console.log(result)
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export const SignInWithGitHub = async () => {
    try {
        const result = account.createOAuth2Session(
            OAuthProvider.Github, 
            'https://verification-and-recovery.onrender.com/sign-in-with-github',
            ["repo", 'user']
        )
        console.log(result)
    } catch (error) {
        throw new Error(error)
    }
}
