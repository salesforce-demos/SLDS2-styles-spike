import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import slds2Style from '@salesforce/resourceUrl/SLDS2';

export default class CustomSLDS2Cmp extends LightningElement {
    isCssLoaded = false;

    renderedCallback() {
        if (this.isCssLoaded) {
            return;
        }
        this.isCssLoaded = true;

        // Load the scoped version of SLDS 2 bundle
        loadStyle(this, `${slds2Style}/dist/css/bundled/slds2.scoped.cosmos.css`)
            .then(() => {
                console.log('SLDS 2 scoped styles loaded successfully');
            })
            .catch(error => {
                console.error('Error loading SLDS 2 styles:', error);
            });
    }
}