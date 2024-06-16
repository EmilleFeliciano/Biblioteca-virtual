document.addEventListener('DOMContentLoaded', () => {
    const currentBooks = [
        { title: 'A Biblioteca da Meia-Noite', author: 'Matt Haig', cover: 'https://cdn.maioresemelhores.com/imagens/a-biblioteca-da-meia-noite-cke.jpg' },
        { title: 'Solitária', author: 'Eliana Alves Cruz', cover: 'https://cdn.culturagenial.com/imagens/livro-solitaria.jpg' },
        { title: 'É Assim Que Acaba', author: 'Colleen Hoover', cover: 'https://osmelhoreslivros.com.br/wp-content/uploads/2021/07/e-assim-que-acaba-e1660567200124.jpg' },
        { title: 'Café Com Deus Pai', author: 'Júnior Rostirola', cover:'https://osmelhoreslivros.com.br/wp-content/uploads/2024/01/cafe-com-deus-pai-livro.jpg.webp'},
        { title: 'Mais Esperto Que o Diabo', author: 'Napoleon Hill', cover:'https://osmelhoreslivros.com.br/wp-content/uploads/2019/10/mais-esperto-que-o-diabo-214x300.jpg.webp'},
        { title: 'A coragem de ser imperfeito', author: 'Brené Brown', cover:'https://imgs.search.brave.com/lVHdab7omJwAfmYWcrAzfM0AmPaQk87CngGNFm-omfA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxclJSYmZJTkpM/LmpwZw'},
        { title: 'A gente mira no amor e acerta na solidão', author: 'Ana Suy', cover:'https://imgs.search.brave.com/9HGhlQ9c5V0LIFjejAKS45BO9cBdTUTEb6c7VUHCLxk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb3Zl/cnMuc3Rvcnl0ZWwu/Y29tL2pwZy02NDAv/OTc4NjU1NTM1ODUx/My4zMzk5MTJjMi0w/MWFkLTRjMDAtYWRm/ZS0zNzkyOGE5MGUy/M2Y_b3B0aW1pemU9/aGlnaCZxdWFsaXR5/PTcw'},
        { title: 'As coisas que você só vê quando desacelera', author: 'Haemin Sunim', cover:'https://imgs.search.brave.com/45sHqRju4yOygG_yQS-tTyvE0dWs1R_Tg__E0Pmvi_E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/dHJhdmVzc2EuY29t/LmJyL2xpdnJvL0dS/L2NiL2NiNjc1ZTIw/LTM4MTgtNDllYS1h/OGY3LTJlNzg0YWIz/NTY4NS5qcGc'},
        { title: 'Essencialismo: A disciplinada busca por menos', author: 'Greg McKeown', cover:'https://imgs.search.brave.com/KENOLoGHsvkYNp5zxCF_3Ieo995mPJ20vVMmZ7tnC_g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMXBr/emhtNXVxNG1udC5j/bG91ZGZyb250Lm5l/dC9pbWFnZW5zL2Nh/cGFzL21wXzQzNzRm/MTA1NjZlNzY4OGE4/ODNjYWVjNWYzZmM5/MTg3LmpwZw'},
    
    
    
    ];

    const popularBooks = [
        { title: 'A Biblioteca da Meia-Noite', author: 'Matt Haig', cover: 'https://cdn.maioresemelhores.com/imagens/a-biblioteca-da-meia-noite-cke.jpg' },
        { title: 'Café Com Deus Pai', author: 'Júnior Rostirola', cover:'https://osmelhoreslivros.com.br/wp-content/uploads/2024/01/cafe-com-deus-pai-livro.jpg.webp'},
        { title: 'É Assim Que Acaba', author: 'Colleen Hoover', cover: 'https://osmelhoreslivros.com.br/wp-content/uploads/2021/07/e-assim-que-acaba-e1660567200124.jpg' },
        { title: 'Alice no País das Maravilhas', author: 'Lewis Carroll', cover: 'https://imgs.search.brave.com/TN8kXPFPCZOXkKOYnKHSukiuunCFtFIf6jDl5nGH9B0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9vc21l/bGhvcmVzbGl2cm9z/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMi9h/bGljZS1uby1wYWlz/LWRhcy1tYXJhdmls/aGFzLmpwZWc' },
        { title: 'Orgulho e preconceito', author: ' Jane Austen', cover: 'https://imgs.search.brave.com/s_JlYOOmQwLKJK7zFc0ohgGWSCYrasJuwLn2mvpQIcs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lZGl0/b3JhcGF1bHVzLnZ0/ZXhhc3NldHMuY29t/L2FycXVpdm9zL2lk/cy8xNTg4ODIvb3Jn/dWxoby1lLXByZWNv/bmNlaXRvLnBuZz92/PTYzNzkwOTAyMDI4/NTcwMDAwMA' },
        { title: 'O morro dos ventos uivantes', author: ' Emily Brontë', cover: 'https://imgs.search.brave.com/YnFLqxbHkgSKroBHKnUOyWIOjuqglV3lrFvmgelydGo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFVZEtKRGUyVEwu/anBn' },
        { title: 'A menina que roubava livros', author: 'Markus Zusak', cover: 'https://imgs.search.brave.com/up06vY1KXMlBjyfuwAEVAczAsWnLRGGxy4-AC-NAQGk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnNv/YnJlbGl2cm9zLmNv/bS5ici9pbWFnZW5z/L2NhcGFzL2EtbWVu/aW5hLXF1ZS1yb3Vi/YXZhLWxpdnJvcy5q/cGc_dz0xMjAw' },
        { title: 'O Pequeno Príncipe', author: 'Antoine de Saint-Exupéry', cover: 'https://imgs.search.brave.com/TQBLRKu4B-mfiL5QytlaCbc9d1SaHUIVXfwhVEK2w1I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMWI2/cTI1OGd0anl1eS5j/bG91ZGZyb250Lm5l/dC9DdXN0b20vQ29u/dGVudC9Qcm9kdWN0/cy8wOS83MS8wOTcx/X3d3dy1lc2NhbGEt/Y29tLWJyLW8tcGVx/dWVuby1wcmluY2lw/ZS1wMTI0OS1fbTFf/NjM3OTY1MDY5NDAy/MjY1MDY4LmpwZw' },
        { title: 'Gente Ansiosa', author: 'Fredrik Backman', cover: 'https://imgs.search.brave.com/6FjmalxciLPY3jIA9SRT7RTUf1iBpamZ8xmenuU2WLE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/c2tvb2IuY29tLmJy/L3pxRlgyaTE0eV9B/LW9qRDI2X2VDVVZt/OVU3ST0vMjAweC9j/ZW50ZXIvdG9wL3Nt/YXJ0L2ZpbHRlcnM6/Zm9ybWF0KGpwZWcp/L2h0dHBzOi8vc2tv/b2IuczMuYW1hem9u/YXdzLmNvbS9saXZy/b3MvMTE5NTE5MDMv/R0VOVEVfQU5TSU9T/QV8xNjI3MzM5MTM3/MTE5NTE5MDNTSy1W/MTE2MjczMzkxMzhC/LmpwZw' },
       
    ];

    const currentBooksContainer = document.getElementById('current-books');
    const popularBooksContainer = document.getElementById('popular-books');

    currentBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
        `;
        currentBooksContainer.appendChild(bookItem);
    });

    popularBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Autor: ${book.author}</p>
        `;
        popularBooksContainer.appendChild(bookItem);
    });
});
