// import jsdom from 'jsdom';
// import fs from 'fs';
import {
    expect
} from 'chai';


describe('Our first test', () => {
    it('should expect true', () => {
        expect(true).to.equal(true);
    });
});

// describe('index.html', () => {
//     it('should have h1 that says users', (done) => {
//         const index = fs.readFileSync('./src/index.html', 'utf-8');
//         jsdom.env(index, function (err, window) {
//             if (err) console.error(err);
//             const h1 = window.document.getElementsByTagName('h1')[0];
//             expect(h1.innerHTML).to.equal('Users');
//             done();
//             window.close();
//         });
//     });
// });