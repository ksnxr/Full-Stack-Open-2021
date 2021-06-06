const _ = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    if (blogs.length === 0) {
        return 0
    } else if (blogs.length === 1) {
        return blogs[0].likes
    } else {
        return blogs.reduce((current, blog) => {
            if (typeof current === 'number') {
                return current + blog.likes
            } else {
                return current.likes + blog.likes
            }
        })
    }
}

const favoriteBlog = (blogs) => {
    return blogs.reduce((blog1, blog2) => {
        if (blog1.likes > blog2.likes) {
            return blog1
        } else {
            return blog2
        }
    }, {})
}

const mostBlogs = (blogs) => {
    if (blogs.length === 0) {
        return {}
    } else if (blogs.length === 1) {
        return { author: blogs[0].author, blogs: 1 }
    } else {
        let authorMap = {}
        let maxAuthor = blogs[0].author
        let maxCount = 1
        blogs.forEach((blog) => {
            if (authorMap[blog.author] == null) {
                authorMap[blog.author] = 1
            } else {
                authorMap[blog.author] += 1
                if (authorMap[blog.author] > maxCount) {
                    maxAuthor = blog.author
                    maxCount = authorMap[blog.author]
                }
            }
        })
        return { author: maxAuthor, blogs: maxCount }
    }
}

const mostLikes = (blogs) => {
    if (blogs.length === 0) {
        return {}
    } else if (blogs.length === 1) {
        return { author: blogs[0].author, likes: blogs[0].likes }
    } else {
        let authorMap = {}
        let maxAuthor = blogs[0].author
        let maxLikes = blogs[0].likes
        blogs.forEach((blog) => {
            if (authorMap[blog.author] == null) {
                authorMap[blog.author] = blog.likes
            } else {
                authorMap[blog.author] += blog.likes
                if (authorMap[blog.author] > maxLikes) {
                    maxAuthor = blog.author
                    maxLikes = authorMap[blog.author]
                }
            }
        })
        return { author: maxAuthor, likes: maxLikes }
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes,
}
