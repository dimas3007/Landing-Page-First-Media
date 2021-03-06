const data = {
    user: {
        nama: 'Dandy Febryan R',
        telp: '0831-0886-7883',
        hp: '083108867883',
        alamat: 'Kompel Oesman Singawinata, Jl.Veteran No.03, Nagri Kaler, Purwakarta, Purwakarta Regency, West Java 41115',
        city: 'Purwakarta'
    },
    hero: {
        img: {
            src: '',
            caption: ''
        }
    },
    tentang: {
        img: {
            src: '',
            caption: ''
        }
    },
    harga:{
        global: {
                list: [
                    {
                        title: 'Combo Family HD POP',
                        speed: '15',
                        tv: '97 Channel',
                        desc: '3 Bulan Open All Channel',
                        harga: 'Rp. 341.550',
                        harga_promo: 'Rp. 308.825',
                    },
                    {
                        title: 'Combo Family Plus HD POP',
                        speed: '30',
                        tv: '97 Channel',
                        desc: '3 Bulan Open All Channel',
                        harga: 'Rp. 451.550',
                        harga_promo: 'Rp. 418.825',
                    },
                    {
                        title: 'Combo Elite X1 POP',
                        speed: '75',
                        tv: '97 Channel',
                        desc: '3 Bulan Open All Channel',
                        harga: 'Rp. 711.700',
                        harga_promo: 'Rp. 590.150',
                    },
                    {
                        title: 'Combo Supreme X1 POP',
                        speed: '150',
                        tv: '97 Channel',
                        desc: '3 Bulan Open All Channel',
                        harga: 'Rp. 1.052.700',
                        harga_promo: 'Rp. 845.900',
                    }
                ],
            discount: '15%',
        },
        area: {
            list: [
                {
                    title: 'Combo Family HD POP',
                    speed: '15',
                    tv: '97 Channel',
                    desc: '3 Bulan Open All Channel',
                    harga: 'Rp. 341.550',
                    harga_promo: 'Rp. 261.800',
                },
                {
                    title: 'Combo Family Plus HD POP',
                    speed: '30',
                    tv: '97 Channel',
                    desc: '3 Bulan Open All Channel',
                    harga: 'Rp. 451.550',
                    harga_promo: 'Rp. 371.800',
                },
                {
                    title: 'Combo Elite X1 POP',
                    speed: '75',
                    tv: '97 Channel',
                    desc: '3 Bulan Open All Channel',
                    harga: 'Rp. 711.700',
                    harga_promo: 'Rp. 562.980',
                },
                {
                    title: 'Combo Supreme X1 POP',
                    speed: '150',
                    tv: '97 Channel',
                    desc: '3 Bulan Open All Channel',
                    harga: 'Rp. 1.052.700',
                    harga_promo: 'Rp. 801.680',
                }
            ],
            discount: '30%',
        },
        desc: [
            '100% Fiber Optik',
            'Harga sudah termasuk PPN + Ebilling',
            'Kecepatan Upload Download 1:1 (Sama)',
            'Tv dengan kualitas Channel terbaik',
            'True UNLIMITED tanpa ada batasan FUP'
        ]
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    const globalPrice = document.querySelector('.harga-global .paket-list')
    const areaPrice = document.querySelector('.harga-attack .paket-list')
    data.harga.global.list.forEach(item => {
        globalPrice.innerHTML += `<div class="paket">
                    <div class="paket-title">
                        <h4>${item.title}</h4>
                    </div>
                    <div class="paket-main">
                        <div class="paket-global">
                            <div class="paket-harga">
                                <h3>${item.harga_promo}</h3>
                                <p>/ Bln</p>
                            </div>
                            <p>Harga Promo 1 Tahun</p>
                        </div>
                        <div class="upto">
                            <p>Up to</p>
                            <h4>${item.speed}</h4>
                            <h6>Mbps</h6>
                        </div>
                        <div class="divider"></div>
                        <ul class="desc">
                            <li>${item.tv}</li>
                            <li>${item.desc}</li>
                        </ul>
                        <div class="paket-pilih">
                            <button onclick="sendWhatsapp('${item.title}')">Daftar Paket</button>
                        </div>
                    </div>
                </div>`
    })
    data.harga.area.list.forEach(item => {
        areaPrice.innerHTML += `<div class="paket">
                    <div class="paket-title">
                        <h4>${item.title}</h4>
                    </div>
                    <div class="paket-main">
                        <div class="paket-global">
                            <div class="paket-harga">
                                <h3>${item.harga_promo}</h3>
                                <p>/ Bln</p>
                            </div>
                            <p>Harga Promo 1 Tahun</p>
                        </div>
                        <div class="upto">
                            <p>Up to</p>
                            <h4>${item.speed}</h4>
                            <h6>Mbps</h6>
                        </div>
                        <div class="divider"></div>
                        <ul class="desc">
                            <li>${item.tv}</li>
                            <li>${item.desc}</li>
                        </ul>
                        <div class="paket-pilih">
                            <button onclick="sendWhatsapp('${item.title}')">Daftar Paket</button>
                        </div>
                    </div>
                </div>`
    })
});

const sendWhatsapp = (chat) => {
    console.log(chat)
    let url = 'https://api.whatsapp.com/send?phone=6283108867883&text='
    if (!chat) {
        url = `${url}Halo%20admin.%20Saya%20mau%20bertanya%20tentang%20First%20Media%20Purwakarta/Cikampek`
    } else {
        url = `${url}Halo admin. Saya mau berlangganan first media Paket ${chat}`
    }
    window.open(url)
}

const closeModals = () => {
    const e = document.getElementById('legal-page')
    e.classList.remove('active')
}

const openModals = () => {
        const e = document.getElementById('legal-page')
    e.classList.add('active')
}


