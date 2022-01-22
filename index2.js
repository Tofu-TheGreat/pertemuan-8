document.getElementById('btn').addEventListener('click', function(){
    let nama = document.getElementById('nama').value
    let kelas = document.getElementById('kelas').value
    let alamat = document.getElementById('alamat').value
    let tentang = document.getElementById('tentang-kamu').value
    

    alert('Hi, ' + nama )
    alert(kelas + ' adalah kelasmu')
    alert('Alamat mu ' + alamat)
    alert('Tentang mu : ' + tentang)

})
