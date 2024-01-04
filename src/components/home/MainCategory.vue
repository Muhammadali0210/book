<template>
    <div class="container">
        <div class="category-wrap">
            <div class="category-bar">
                <div class="main-title">Asosiy kategoriyalar</div>
                <ul class="category-bontent">
                    <li class="category-link cursor">Temuriylar davri </li>
                    <li class="category-link cursor">Jadid adabiyoti </li>
                    <li class="category-link cursor">Sovet davri </li>
                    <li class="category-link cursor">Mustaqillik davri</li>
                </ul>
            </div>
            <div class="author-wrap" v-if="$store.state.authContent">
                <AuthorItem v-for="author in author" :name="author.name" :years="author.years" :img="author.img"/>
            </div>
            <div class="book-wrap" v-if="$store.state.bookContent">
                <BookItem v-for="books in books" :name="books.name" :author="books.author" :img="books.img"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            author: [
                {
                    name: "Abdullo Avloniy",
                    years: "2001 - 2022",
                    img: "./src/assets/images/avloniy.jpg"
                },
                {
                    name: "Abdullo Avloniy",
                    years: "2001 - 2022",
                    img: "./src/assets/images/avloniy.jpg"
                },
                {
                    name: "Abdullo Avloniy",
                    years: "2001 - 2022",
                    img: "./src/assets/images/avloniy.jpg"
                },
                {
                    name: "Abdullo Avloniy",
                    years: "2001 - 2022",
                    img: "./src/assets/images/avloniy.jpg"
                },
                {
                    name: "Abdullo Avloniy",
                    years: "2001 - 2022",
                    img: "./src/assets/images/avloniy.jpg"
                },
                {
                    name: "Abdullo Avloniy",
                    years: "2001 - 2022",
                    img: "./src/assets/images/avloniy.jpg"
                },
                {
                    name: "Abdullo Avloniy",
                    years: "2001 - 2022",
                    img: "./src/assets/images/avloniy.jpg"
                },
                {
                    name: "Abdullo Avloniy",
                    years: "2001 - 2022",
                    img: "./src/assets/images/avloniy.jpg"
                },
            ],
            books: [
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
                {
                    name: "Dunyoning ishlari",
                    author: "O’tkir Hoshimov",
                    img: "./src/assets/images/book.jpg"
                },
            ]
        }
    },
}
</script>
<style scoped>
.category-bontent{
    display: flex;
    justify-content: center;
    gap: 34px;
    padding-bottom: 30px;
}
.category-link{
    padding: 10px;
    color: #C9AC8C;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.main-title{
    text-align: center;
}
.category-wrap{
    padding-bottom: 40px;
}
.author-wrap{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

}
.book-wrap{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
}
</style>