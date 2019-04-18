<template>
  <div class="section">
        <h2>{{ facil }}</h2>
        <img v-bind:src="link" v-bind:usemap="facil" title="" />
        <span v-for="area in areas" :key="area.id" v-html="area.html" v-if="area.fname=facil"></span>
  </div>
</template>

<script>
    export default {
        name: 'ShowSection',
        data() {
            return{ 
                facil: this.$route.params.name,
                link: require('../assets/facilities/section/' + this.$route.params.name + '.png'),
                areas:[
                    {id: 1, fname : "성호관", html : '<map name="성호관" id="성호관">'
                    +'<map name="성호관" id="성호관">'
                    +'<area id="332" alt="332" title="332" href="/menu/faclist/성호관/332" shape="rect" coords="288,17,379,105" style="outline:none;" target="_self"     />'
                    +'<area id="333" alt="333" title="333" href="/menu/faclist/성호관/333" shape="rect" coords="379,16,457,104" style="outline:none;" target="_self"     />'
                    +'<area id="334" alt="334" title="334" href="/menu/faclist/성호관/334" shape="rect" coords="456,15,613,105" style="outline:none;" target="_self"     />'
                    +'<area id="337" alt="337" title="337" href="/menu/faclist/성호관/337" shape="rect" coords="832,17,929,151" style="outline:none;" target="_self"     />'
                    +'<area id="304" alt="304" title="304" href="/menu/faclist/성호관/304" shape="rect" coords="366,169,509,258" style="outline:none;" target="_self"     />'
                    +'<area id="305" alt="305" title="305" href="/menu/faclist/성호관/304" shape="rect" coords="510,169,658,258" style="outline:none;" target="_self"     />'
                    +'<area id="306" alt="306" title="306" href="/menu/faclist/성호관/306" shape="rect" coords="659,169,811,258" style="outline:none;" target="_self"     />'
                    +'<area id="232" alt="232" title="232" href="/menu/faclist/성호관/232" shape="rect" coords="78,337,208,424" style="outline:none;" target="_self"     />'
                    +'<area id="233" alt="233" title="233" href="/menu/faclist/성호관/233" shape="rect" coords="288,336,376,423" style="outline:none;" target="_self"     />'
                    +'<area id="234" alt="234" title="234" href="/menu/faclist/성호관/234" shape="rect" coords="377,336,455,423" style="outline:none;" target="_self"     />'
                    +'<area id="235" alt="235" title="235" href="/menu/faclist/성호관/235" shape="rect" coords="455,334,533,423" style="outline:none;" target="_self"     />'
                    +'<area id="236" alt="236" title="236" href="/menu/faclist/성호관/236" shape="rect" coords="534,334,612,424" style="outline:none;" target="_self"     />'
                    +'<area id="237" alt="237" title="237" href="/menu/faclist/성호관/237" shape="rect" coords="701,336,810,423" style="outline:none;" target="_self"     />'
                    +'<area id="201" alt="201" title="201" href="/menu/faclist/성호관/201" shape="rect" coords="14,492,96,575" style="outline:none;" target="_self"     />'
                    +'<area id="201-1" alt="201-1" title="201-1" href="/menu/faclist/성호관/201-1" shape="rect" coords="96,491,178,576" style="outline:none;" target="_self"     />'
                    +'<area id="202" alt="202" title="202" href="/menu/faclist/성호관/202" shape="rect" coords="178,488,337,577" style="outline:none;" target="_self"     />'
                    +'<area id="203" alt="203" title="203" href="/menu/faclist/성호관/203" shape="rect" coords="338,490,496,576" style="outline:none;" target="_self"     />'
                    +'<area id="204" alt="204" title="204" href="/menu/faclist/성호관/204" shape="rect" coords="497,491,655,577" style="outline:none;" target="_self"     />'
                    +'<area id="205" alt="205" title="205" href="/menu/faclist/성호관/205" shape="rect" coords="656,490,810,576" style="outline:none;" target="_self"     />'
                    +'<area id="135" alt="135" title="135" href="/menu/faclist/성호관/135" shape="rect" coords="558,646,748,838" style="outline:none;" target="_self"     />'
                    +'<area id="131" alt="131" title="131" href="/menu/faclist/성호관/131" shape="rect" coords="299,840,431,930" style="outline:none;" target="_self"     />'
                    +'<area id="132" alt="132" title="132" href="/menu/faclist/성호관/132" shape="rect" coords="430,840,558,930" style="outline:none;" target="_self"     />'
                    +'<area id="133" alt="133" title="133" href="/menu/faclist/성호관/133" shape="rect" coords="767,840,895,930" style="outline:none;" target="_self"     />'
                    +'<area id="104" alt="104" title="104" href="/menu/faclist/성호관/104" shape="rect" coords="463,995,558,1079" style="outline:none;" target="_self"     />'
                    +'<area id="105" alt="105" title="105" href="/menu/faclist/성호관/105" shape="rect" coords="682,997,895,1081" style="outline:none;" target="_self"     />'
                    +'</map>'},
                    {id: 2, fname : "다산관", html : '<map name="다산관" id="다산관">'
                    +'<area id="505" alt="505" title="505" href="/menu/faclist/다산관/505" shape="rect" coords="826,15,922,167" style="outline:none;" target="_self"     />'
                    +'<area id="506" alt="506" title="506" href="/menu/faclist/다산관/506" shape="rect" coords="924,16,1031,216" style="outline:none;" target="_self"     />'
                    +'<area id="507" alt="507" title="507" href="/menu/faclist/다산관/507" shape="rect" coords="828,216,1030,400" style="outline:none;" target="_self"     />'
                    +'<area id="310" alt="310" title="310" href="/menu/faclist/다산관/310" shape="rect" coords="143,658,373,808" style="outline:none;" target="_self"     />'
                    +'<area id="311" alt="311" title="311" href="/menu/faclist/다산관/311" shape="rect" coords="375,659,605,809" style="outline:none;" target="_self"     />'
                    +'<area id="307" alt="307" title="307" href="/menu/faclist/다산관/307" shape="rect" coords="828,860,1038,1041" style="outline:none;" target="_self"     />'
                    +'<area id="205B" alt="205B" title="205B" href="/menu/faclist/다산관/205B" shape="rect" coords="829,1496,1031,1677" style="outline:none;" target="_self"     />'
                    +'<area id="205A" alt="205A" title="205A" href=/menu/faclist/다산관/205A" shape="rect" coords="832,1684,1034,1881" style="outline:none;" target="_self"     />'
                    +'<area id="109" alt="109" title="109" href="/menu/faclist/다산관/109" shape="rect" coords="17,1938,148,2135" style="outline:none;" target="_self"     />'
                    +'<area id="115" alt="115" title="115" href="/menu/faclist/다산관/115" shape="rect" coords="148,1936,263,2087" style="outline:none;" target="_self"     />'
                    +'<area id="110" alt="110" title="110" href="/menu/faclist/다산관/110" shape="rect" coords="264,1936,376,2087" style="outline:none;" target="_self"     />'
                    +'<area id="111" alt="111" title="111" href="/menu/faclist/다산관/111" shape="rect" coords="377,1938,606,2089" style="outline:none;" target="_self"     />'
                    +'<area id="105" alt="105" title="105" href="/menu/faclist/다산관/105" shape="rect" coords="149,2369,262,2516" style="outline:none;" target="_self"     />'
                    +'<area id="106" alt="106" title="106" href="/menu/faclist/다산관/106" shape="rect" coords="262,2365,375,2516" style="outline:none;" target="_self"     />'
                    +'<area id="107" alt="107" title="107" href="/menu/faclist/다산관/107" shape="rect" coords="377,2368,490,2519" style="outline:none;" target="_self"     />'
                    +'<area id="108" alt="108" title="108" href="/menu/faclist/다산관/108" shape="rect" coords="493,2366,606,2517" style="outline:none;" target="_self"     />'
                    +'<area id="B115" alt="B115" title="B115" href="/menu/faclist/다산관/B115" shape="rect" coords="260,2574,373,2678" style="outline:none;" target="_self"     />'
                    +'<area id="B114" alt="B114" title="B114" href="/menu/faclist/다산관/B114" shape="rect" coords="376,2574,429,2678" style="outline:none;" target="_self"     />'
                    +'<area id="B112" alt="B112" title="B112" href="/menu/faclist/다산관/B112" shape="rect" coords="479,2575,596,2679" style="outline:none;" target="_self"     />'
                    +'<area id="B105" alt="B105" title="B105" href="/menu/faclist/다산관/B106" shape="rect" coords="828,2573,1031,2772" style="outline:none;" target="_self"     />'
                    +'<area id="B106" alt="B106" title="B106" href="/menu/faclist/다산관/B106" shape="rect" coords="828,2776,1031,2959" style="outline:none;" target="_self"     />'
                    +'<area id="B108" alt="B108" title="B108" href="/menu/faclist/다산관/B108" shape="rect" coords="144,3008,347,3158" style="outline:none;" target="_self"     />'
                    +'<area id="B109" alt="B109" title="B109" href="/menu/faclist/다산관/B109" shape="rect" coords="143,2888,260,3006" style="outline:none;" target="_self"     />'
                    +'<area id="B121" alt="B121" title="B121" href="/menu/faclist/다산관/B121" shape="rect" coords="420,2774,678,3082" style="outline:none;" target="_self"     />'
                    +'</map>'},
                    {id: 3, fname : "종합관", html : '<map name="종합관" id="종합관">'
                    +'<area id="612" alt="612" title="612" href="/menu/faclist/종합관/612" shape="rect" coords="14,204,140,323" style="outline:none;" target="_self"     />'
                    +'<area id="613" alt="613" title="613" href="/menu/faclist/종합관/613" shape="rect" coords="143,202,269,321" style="outline:none;" target="_self"     />'
                    +'<area id="502" alt="502" title="502" href="/menu/faclist/종합관/502" shape="rect" coords="573,386,797,523" style="outline:none;" target="_self"     />'
                    +'<area id="503" alt="503" title="503" href="/menu/faclist/종합관/503" shape="rect" coords="798,386,1022,523" style="outline:none;" target="_self"     />'
                    +'<area id="508" alt="508" title="508" href="/menu/faclist/종합관/508" shape="rect" coords="575,572,668,695" style="outline:none;" target="_self"     />'
                    +'<area id="509" alt="509" title="509" href="/menu/faclist/종합관/509" shape="rect" coords="671,572,845,695" style="outline:none;" target="_self"     />'
                    +'<area id="102" alt="102" title="102" href="/menu/faclist/종합관/102" shape="rect" coords="48,750,272,889" style="outline:none;" target="_self"     />'
                    +'<area id="104" alt="104" title="104" href="/menu/faclist/종합관/104" shape="rect" coords="575,751,799,890" style="outline:none;" target="_self"     />'
                    +'<area id="105" alt="105" title="105" href="/menu/faclist/종합관/105" shape="rect" coords="798,749,1022,888" style="outline:none;" target="_self"     />'
                    +'<area id="101" alt="101" title="101" href="/menu/faclist/종합관/101" shape="rect" coords="576,990,1022,1443" style="outline:none;" target="_self"     />'
                    +'</map>'},
                    {id: 4, fname : "율곡관", html : '<map name="율곡관" id="율곡관">'
                    +'<area id="425" alt="425" title="425" href="/menu/faclist/율곡관/425" shape="rect" coords="304,42,429,151" style="outline:none;" target="_self"     />'
                    +'<area id="528" alt="528" title="528" href="/menu/faclist/율곡관/528" shape="rect" coords="500,44,625,153" style="outline:none;" target="_self"     />'
                    +'<area id="357" alt="357" title="357" href="/menu/faclist/율곡관/357" shape="rect" coords="17,206,142,330" style="outline:none;" target="_self"     />'
                    +'<area id="356" alt="356" title="356" href="/menu/faclist/율곡관/356" shape="rect" coords="19,332,144,491" style="outline:none;" target="_self"     />'
                    +'<area id="358-2" alt="358-2" title="358-2" href="/menu/faclist/율곡관/358-2" shape="rect" coords="290,205,388,273" style="outline:none;" target="_self"     />'
                    +'<area id="358-1" alt="358-1" title="358-1" href="/menu/faclist/율곡관/358-1" shape="rect" coords="389,208,516,380" style="outline:none;" target="_self"     />'
                    +'<area id="359" alt="359" title="359" href="/menu/faclist/율곡관/359" shape="rect" coords="516,205,717,377" style="outline:none;" target="_self"     />'
                    +'<area id="358-4" alt="358-4" title="358-4" href="/menu/faclist/율곡관/358-4" shape="rect" coords="272,315,332,381" style="outline:none;" target="_self"     />'
                    +'<area id="358-3" alt="358-3" title="358-3" href="/menu/faclist/율곡관/358-3" shape="rect" coords="330,313,390,379" style="outline:none;" target="_self"     />'
                    +'<area id="354" alt="354" title="354" href="/menu/faclist/율곡관/354" shape="rect" coords="191,438,272,516" style="outline:none;" target="_self"     />'
                    +'<area id="254" alt="254" title="254" href="/menu/faclist/율곡관/254" shape="rect" coords="20,990,142,1113" style="outline:none;" target="_self"     />'
                    +'<area id="255" alt="255" title="255" href="/menu/faclist/율곡관/255" shape="rect" coords="145,991,267,1114" style="outline:none;" target="_self"     />'
                    +'<area id="256" alt="256" title="256" href="/menu/faclist/율곡관/256" shape="rect" coords="273,992,395,1115" style="outline:none;" target="_self"     />'
                    +'<area id="257" alt="257" title="257" href="/menu/faclist/율곡관/257" shape="rect" coords="395,990,517,1113" style="outline:none;" target="_self"     />'
                    +'<area id="258" alt="258" title="258" href="/menu/faclist/율곡관/258" shape="rect" coords="518,991,635,1114" style="outline:none;" target="_self"     />'
                    +'<area id="259" alt="259" title="259" href="/menu/faclist/율곡관/259" shape="rect" coords="639,991,756,1114" style="outline:none;" target="_self"     />'
                    +'<area id="260" alt="260" title="260" href="/menu/faclist/율곡관/260" shape="rect" coords="763,990,889,1113" style="outline:none;" target="_self"     />'
                    +'<area id="253" alt="253" title="253" href="/menu/faclist/율곡관/253" shape="rect" coords="24,1165,140,1273" style="outline:none;" target="_self"     />'
                    +'<area id="252" alt="252" title="252" href="/menu/faclist/율곡관/252" shape="rect" coords="192,1163,272,1271" style="outline:none;" target="_self"     />'
                    +'<area id="262" alt="262" title="262" href="/menu/faclist/율곡관/262" shape="rect" coords="637,1161,717,1269" style="outline:none;" target="_self"     />'
                    +'<area id="261" alt="261" title="261" href="/menu/faclist/율곡관/261" shape="rect" coords="764,1164,887,1272" style="outline:none;" target="_self"     />'
                    +'<area id="153" alt="153" title="153" href="/menu/faclist/율곡관/153" shape="rect" coords="268,1779,352,1901" style="outline:none;" target="_self"     />'
                    +'<area id="157" alt="157" title="157" href="/menu/faclist/율곡관/157" shape="rect" coords="698,1902,892,2055" style="outline:none;" target="_self"     />'
                    +'<area id="150" alt="150" title="150" href="/menu/faclist/율곡관/150" shape="rect" coords="270,1960,643,2267" style="outline:none;" target="_self"     />'
                    +'</map>'},
                    {id: 5, fname : "서관", html : '<map name="서관" id="서관">'
                    +'<area id="331" alt="331" title="331" href="/menu/faclist/서관/331" shape="rect" coords="13,16,82,122" style="outline:none;" target="_self"     />'
                    +'<area id="332" alt="332" title="332" href="/menu/faclist/서관/332" shape="rect" coords="82,17,193,123" style="outline:none;" target="_self"     />'
                    +'<area id="334" alt="334" title="334" href="/menu/faclist/서관/334" shape="rect" coords="548,16,609,121" style="outline:none;" target="_self"     />'
                    +'<area id="303" alt="303" title="303" href="/menu/faclist/서관/303" shape="rect" coords="190,212,299,317" style="outline:none;" target="_self"     />'
                    +'<area id="305" alt="305" title="305" href="/menu/faclist/서관/305" shape="rect" coords="300,213,415,317" style="outline:none;" target="_self"     />'
                    +'<area id="307" alt="307" title="307" href="/menu/faclist/서관/307" shape="rect" coords="415,214,558,314" style="outline:none;" target="_self"     />'
                    +'<area id="239" alt="239" title="239" href="/menu/faclist/서관/239" shape="rect" coords="619,370,766,470" style="outline:none;" target="_self"     />'
                    +'<area id="135" alt="135" title="135" href="/menu/faclist/서관/135" shape="rect" coords="682,723,829,828" style="outline:none;" target="_self"     />'
                    +'<area id="101" alt="101" title="101" href="/menu/faclist/서관/101" shape="rect" coords="10,919,211,1024" style="outline:none;" target="_self"     />'
                    +'<area id="107" alt="107" title="107" href="/menu/faclist/서관/107" shape="rect" coords="729,921,875,1024" style="outline:none;" target="_self"     />'
                    +'</map>'},
                    {id: 6, fname : "신학생회관", html : '<map name="신학생회관" id="신학생회관">'
                    +'<area id="B03" alt="B03" title="B03" href="/menu/faclist/신학생회관/B03" shape="rect" coords="135,138,389,391" style="outline:none;" target="_self"     />'
                    +'<area id="B04" alt="B04" title="B04" href="/menu/faclist/신학생회관/B04" shape="rect" coords="519,136,773,389" style="outline:none;" target="_self"     />'
                    +'</map>'},
                    {id: 7, fname : "운동장", html : '<map name="운동장" id="운동장">'
                    +'<area id="운동장" alt="운동장" title="운동장" href="/menu/faclist/운동장/운동장" shape="rect" coords="0,0,726,545" style="outline:none;" target="_self"     />'
                    +'</map>'},
                    {id: 8, fname : "원천관", html : '<map name="원천관" id="원천관">'
                    +'<area id="534-2" alt="534-2" title="534-2" href="/menu/faclist/원천관/534-2" shape="rect" coords="336,24,392,86" style="outline:none;" target="_self"     />'
                    +'<area id="535" alt="535" title="535" href="/menu/faclist/원천관/535" shape="rect" coords="392,26,541,88" style="outline:none;" target="_self"     />'
                    +'<area id="538" alt="538" title="538" href="/menu/faclist/원천관/538" shape="rect" coords="821,24,910,86" style="outline:none;" target="_self"     />'
                    +'<area id="539" alt="539" title="539" href="/menu/faclist/원천관/539" shape="rect" coords="911,24,1000,86" style="outline:none;" target="_self"     />'
                    +'<area id="540" alt="540" title="540" href="/menu/faclist/원천관/540" shape="rect" coords="1001,24,1102,86" style="outline:none;" target="_self"     />'
                    +'<area id="502" alt="502" title="502" href="/menu/faclist/원천관/502" shape="rect" coords="193,200,314,264" style="outline:none;" target="_self"     />'
                    +'<area id="503" alt="503" title="503" href="/menu/faclist/원천관/503" shape="rect" coords="313,200,434,264" style="outline:none;" target="_self"     />'
                    +'<area id="505" alt="505" title="505" href="/menu/faclist/원천관/505" shape="rect" coords="552,200,642,264" style="outline:none;" target="_self"     />'
                    +'<area id="506" alt="506" title="506" href="/menu/faclist/원천관/506" shape="rect" coords="642,200,732,264" style="outline:none;" target="_self"     />'
                    +'<area id="507" alt="507" title="507" href="/menu/faclist/원천관/507" shape="rect" coords="732,201,822,265" style="outline:none;" target="_self"     />'
                    +'<area id="340" alt="340" title="340" href="/menu/faclist/원천관/340" shape="rect" coords="967,845,1042,953" style="outline:none;" target="_self"     />'
                    +'<area id="235" alt="235" title="235" href="/menu/faclist/원천관/235" shape="rect" coords="335,1566,410,1647" style="outline:none;" target="_self"     />'
                    +'<area id="237" alt="237" title="237" href="/menu/faclist/원천관/237" shape="rect" coords="522,1565,588,1646" style="outline:none;" target="_self"     />'
                    +'<area id="242" alt="242" title="242" href="/menu/faclist/원천관/242" shape="rect" coords="833,1564,875,1645" style="outline:none;" target="_self"     />'
                    +'<area id="243" alt="243" title="243" href="/menu/faclist/원천관/243" shape="rect" coords="876,1565,918,1646" style="outline:none;" target="_self"     />'
                    +'<area id="251" alt="251" title="251" href="/menu/faclist/원천관/251" shape="rect" coords="994,1193,1138,1309" style="outline:none;" target="_self"     />'
                    +'<area id="101" alt="101" title="101" href="/menu/faclist/원천관/101" shape="rect" coords="138,2351,220,2437" style="outline:none;" target="_self"     />'
                    +'<area id="103" alt="103" title="103" href="/menu/faclist/원천관/103" shape="rect" coords="300,2352,356,2438" style="outline:none;" target="_self"     />'
                    +'</map>'},
                    {id: 9, fname : "원천정보관", html : '<map name="원천정보관" id="원천정보관">'
                    +'<area id="308" alt="308" title="308" href="/menu/faclist/원천정보관/308" shape="rect" coords="855,21,1179,176" style="outline:none;" target="_self"     />'
                    +'<area id="301" alt="301" title="301" href="/menu/faclist/원천정보관/301" shape="rect" coords="19,309,163,544" style="outline:none;" target="_self"     />'
                    +'<area id="302" alt="302" title="302" href="/menu/faclist/원천정보관/302" shape="rect" coords="164,308,308,543" style="outline:none;" target="_self"     />'
                    +'<area id="303" alt="303" title="303" href="/menu/faclist/원천정보관/303" shape="rect" coords="311,309,455,544" style="outline:none;" target="_self"     />'
                    +'<area id="304" alt="304" title="304" href="/menu/faclist/원천정보관/304" shape="rect" coords="457,309,601,544" style="outline:none;" target="_self"     />'
                    +'<area id="305" alt="305" title="305" href="/menu/faclist/원천정보관/305" shape="rect" coords="712,381,873,543" style="outline:none;" target="_self"     />'
                    +'<area id="306" alt="306" title="306" href="/menu/faclist/원천정보관/306" shape="rect" coords="872,380,1033,542" style="outline:none;" target="_self"     />'
                    +'<area id="307" alt="307" title="307" href="/menu/faclist/원천정보관/307" shape="rect" coords="1034,309,1178,544" style="outline:none;" target="_self"     />'
                    +'</map>'},
                    {id: 10, fname : "체육관", html : '<map name="체육관" id="체육관">'
                    +'<area id="130" alt="130" title="130" href="/menu/faclist/체육관/130" shape="rect" coords="171,132,429,387" style="outline:none;" target="_self"     />'
                    +'</map>'}
                ]
            }
        },
        methods:{
            wow(txt){
                alert(txt)
            }
        }
    }

</script>

<style scoped>

.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: auto;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

</style>
