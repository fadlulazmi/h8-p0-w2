var nama = 'FADLUL AZMI';
var peran = 'Tabib';

if (nama === '' && peran === ''){
    console.log ("nama harus diisi")
} else if (/*(nama === 'Mikael') && */(peran ==='')){
    console.log("Halo " + nama + ", Pilih peranmu untuk memuali game!")
} else if (/*(nama === 'Nina') && */(peran === 'Ksatria')){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
} else if (/*(nama === 'Danu') && */(peran === 'Tabib')){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo Tabib ' + nama + ', kamu dapat membantu temanmu yang terluka!')
} else if (/*(nama === 'Zero') && */(peran === 'Penyihir')){
    console.log('Selamat datang di Dunia Proxytia, ' + nama)
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
} else {
    console.log('Halo ' + nama + ', peran tersebut tidak tersedia di Proxytia, atau periksa kembali penulisanmu :)')
}