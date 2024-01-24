// This code will generate random strings for the Firts Name, Last Name, E-mail and Password inputs
export class Utils {
    static randomString(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    static randomEmail() {
        return `test_${this.randomString(5)}@gmail.com`;
    }

    static generateStrongPassword() {
        let retVal = "Alpha_3457";
        return retVal;
    }
}