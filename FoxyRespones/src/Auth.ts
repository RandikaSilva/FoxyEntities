export class Auth  {
    public _id: string ="";
    public userId: string ="";
    public userName: string = "";
    public userEmail: string = "";
    public userPassword: string = "";
    public userType: string ="";
    public userDetails: any;
    public lastSuccessfulLoginOn: Date | null;
    public isFirstAccess: boolean = true;
    public isPasswordReset: boolean = false;
    public passwordResetUniqueID: string ="";
    public unsuccessfulLoginAttempts: number;
    public isActive: boolean = true;
    public isProfileLocked: boolean = false;
    public profileLockedOn: Date | null;
    public accessToken: string;
    public refreshToken: string;

    constructor(
        _id: string,
        userId: string,
        userName: string,
        userEmail: string,
        userPassword: string,
        userType: string,
        userDetails: any,
        isActive: boolean,
        unsuccessfulLoginAttempts?: number,
        lastSuccessfulLoginOn?: Date,
        isFirstAccess?: boolean,
        isPasswordReset?: boolean,
        passwordResetUniqueID?: string,
        isProfileLocked?: boolean,
        profileLockedOn?: Date,
        accessToken?: string,
        refreshToken?: string,
    ){
        this._id = _id;
        this.userId = userId;
        this.userName = userName;
        this.userEmail= userEmail,
        this.userPassword = userPassword;
        this.userType = userType;
        this.userDetails = userDetails;
        this.unsuccessfulLoginAttempts= unsuccessfulLoginAttempts? unsuccessfulLoginAttempts: 0;
        this.isActive = isActive;
        this.lastSuccessfulLoginOn=lastSuccessfulLoginOn? lastSuccessfulLoginOn: null;
        this.lastSuccessfulLoginOn = lastSuccessfulLoginOn || null;
        this.isFirstAccess = isFirstAccess? isFirstAccess: false;
        this.isPasswordReset = isPasswordReset? isPasswordReset: false;
        this.passwordResetUniqueID = passwordResetUniqueID? passwordResetUniqueID: "";
        this.isProfileLocked = isProfileLocked? isProfileLocked: false;
        this.profileLockedOn = profileLockedOn? profileLockedOn: null;
        this.accessToken = accessToken? accessToken: "";
        this.refreshToken = refreshToken? refreshToken: "";
    }
}
export class UserCredentials {
    public userId: string="";
    public password: string = "";

    constructor (userId: string, password: string){
        this.userId = userId;
        this.password = password;
    }
}
export class ResetPassword {
    public resetToken: string="";
    public password: string = "";

    constructor (resetToken: string, password: string){
        this.resetToken = resetToken;
        this.password = password;
    }
}
export class ForgotPassword {
    public userId: string="";

    constructor (userId: string){
        this.userId = userId;
    }
}