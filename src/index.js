import _ from 'lodash';
// import { NAME, NiJyo } from './utilities'; // 関数なので{ }の中に書く必要がある

// import * as utilities from './utilities' // utilitiesというファイルをすべて as の後のutilitiesに置き換えているということ

import { NAME as NAME_OF_TAKAHISA } from './utilities'  // utilitiesというファイルの中の NAMEとう定数を as以下のNAME_OF_TAKAHISAで置き換えているということ。そして、このsrc/index.jsの中で利用できるということ。

import Lion from './utilities'  // default で書いたものは、defaultでこれが使えますよ、ということ。逆に defaultで書いていないものは、defaultで何が使えるのか指定していない状態なので、指定する必要がある。したがって、defaultで書けば指定する必要がなく、{ }の中で指定する必要がない。ちなみに、defaultで指定されたときの内容は、importの際に、変えても良い。だから、被るということはない。import Tiger from './utilities' として、console.log(Tiger.say()) でも問題なく動きます。

import Tiger from './utilities'



// console.log(NiJyo(3));  // 9
// console.log(NAME);  // Takahisa

// console.log(utilities.NAME2)  // Takahisa2

console.log(NAME_OF_TAKAHISA)  // Takahisa

console.log(Lion.say())  // Roar

console.log(Tiger.say()) // Roar Tigerでも問題なく動きます。

function component() {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!!']
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());

