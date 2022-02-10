import { sayHello } from './utils';
import pictureHeaderSrc from './images/picture-header.jpg';
import circleSolidSrc from './images/circle-solid.svg';
import './styles.scss';

function main() {
    sayHello();

    document.querySelector('.images')!.innerHTML = [
        `<img src="${pictureHeaderSrc}"/>`,
        `<img src="${circleSolidSrc}"/>`
    ].join('');
}

main();
