const authorsMap = new Map();

      organizedData.forEach(({book}) => {
        const author = book.author;
        if (authorsMap.has(author)) {
          authorsMap.set(author, authorsMap.get(author) + 1);
        } else {
          authorsMap.set(author, 1);
        }
      });

      let totalAuthors = 0;

      for (const count of authorsMap.values()) {
        totalAuthors += count;
      }

      console.log(totalAuthors)