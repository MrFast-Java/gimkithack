var url = 'https://raw.githubusercontent.com/MrFast-Java/gimkithack/main/script.txt'; fetch(url).then((r)=>{r.text().then((text)=>{eval(text);});});
