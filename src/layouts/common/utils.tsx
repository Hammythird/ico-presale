import { toast } from 'react-toastify';
import { ethers } from 'ethers';

export const tips = (html: string) => {
    toast(html, {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        style: {
            backgroundColor: '#2e0e3f',
            color: 'white',
            boxShadow: '1px 2px 2px #f22a73',
            zIndex: 1111112
        }
    });
}
export const proxy = process.env.REACT_APP_PROXY || 'http://localhost'
export const TF = (time: number, offset: number = 2) => {
    // let iOffset = Number(offset);
    let date = new Date(time);
    let y = date.getUTCFullYear();
    let m = date.getUTCMonth() + 1;
    let d = date.getUTCDate();
    let hh = date.getUTCHours();
    let mm = date.getUTCMinutes();
    let ss = date.getUTCSeconds();
    let dt = ("0" + m).slice(-2) + "-" + ("0" + d).slice(-2);
    let tt = ("0" + hh).slice(-2) + ":" + ("0" + mm).slice(-2) + ":" + ("0" + ss).slice(-2);
    return y + '-' + dt + ' ' + tt;
}

export const NF = (num: number, p: number = 2) => num.toLocaleString('en', { maximumFractionDigits: p });
export const validateEmail = (email: string): boolean => email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
export const validateUsername = (username: string): boolean => /^[a-zA-Z ]{3,20}$/.test(username);
export const validateNumber = (number: string): boolean => parseFloat(number) > 0;
export const validatePhone = (number: string): boolean => /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(number);
export const validateUrl = (str: string): boolean => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}


export const toLocaleSting = (time: any) => {
    let date = new Date(time);
    let y = date.getUTCFullYear();
    let m = date.getUTCMonth() + 1;
    let d = date.getUTCDate();
    let hh = date.getUTCHours();
    let mm = date.getUTCMinutes();
    let ss = date.getUTCSeconds();
    let dt = ("0" + m).slice(-2) + "-" + ("0" + d).slice(-2);
    let tt = ("0" + hh).slice(-2) + ":" + ("0" + mm).slice(-2) + ":" + ("0" + ss).slice(-2);
    return y + '-' + dt + 'T' + tt;

}

export const copyToClipboard = (text: string) => {
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    if (text.length > 40) {
        text = text.substring(0, 20) + "..." + text.substring(text.length - 5);
    }
    tips("Copied : " + text);
};

export const toBigNum = (value: any, d: any) => {
    return ethers.utils.parseUnits(Number(value).toFixed(d), d);
}

export const fromBigNum = (value: any, d: any) => {
    return parseFloat(ethers.utils.formatUnits(value, d));
}
export const toBalance = (value: any) => {
    var f = parseFloat(ethers.utils.formatEther(value));
    if (f < 0) { f = 0; }
    return NF(f, 4);
}