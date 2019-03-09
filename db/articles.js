    const storage = [];

    const allArticles = () => {
        return storage;
    };

    const getArticle = (title) => {
        let result;
        storage.forEach(article => {
            if (article.title.replace(/%20/g, ' ') === title) {
                result = article;
                return result;
            }
        });
        return result;
    }

    const updateArticle = (title, body, author) => {
        storage.forEach(i => {
            if (i.title.replace(/%20/g, ' ') === title) {
                i.title = title;
                i.body = body;
                i.author = author;
            };
        });
    };

    const addArticle = (title, body, author) => {
        let item = {};
        item.title = title;
        item.body = body;
        item.author = author;
        item.urlTitle = title.replace(' ', /%20/);
        storage.push(item);
    };

    const removeArticle = (title) => {
        storage.forEach(i => {
            if (i.title.replace(/%20/g, '') === title) {
                storage.splice(storage.indexOf(i), 1);
            }
        });
    }

    module.exports = {
        allArticles,
        addArticle,
        getArticle,
        updateArticle,
        removeArticle,
        storage
    }