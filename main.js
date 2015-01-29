var Blog = React.createClass({
    getBlogEntries: function (blogEntries) {
        return blogEntries.map(function (entry) {
            return <BlogArticle blogEntry={entry} />;
        });
    },
    render: function () {
        var blogEntries = this.props.blogEntries;
        return (
            <div id="blog">
                {this.getBlogEntries(blogEntries)}
            </div>
        );
    }
});

var BlogArticle = React.createClass({
    render: function () {
        return (
            <div className="blog-article">
                <BlogTitle title={this.props.blogEntry.title} />
                <p>{this.props.blogEntry.contents}</p>
            </div>
        );
    }
});

var BlogTitle = React.createClass({
    render: function () {
        return (
            <h1 className="title">{this.props.title}</h1>
        );
    }
});

var blogEntries = [{
    title: 'How to use React',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aut cum ducimus enim, et eveniet facilis, mollitia nihil optio perspiciatis rem velit vero! Atque commodi eveniet facilis quia veniam.'
},{
    title: 'How to use React',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aut cum ducimus enim, et eveniet facilis, mollitia nihil optio perspiciatis rem velit vero! Atque commodi eveniet facilis quia veniam.'
},{
    title: 'How to use React',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aut cum ducimus enim, et eveniet facilis, mollitia nihil optio perspiciatis rem velit vero! Atque commodi eveniet facilis quia veniam.'
},{
    title: 'How to use React',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aut cum ducimus enim, et eveniet facilis, mollitia nihil optio perspiciatis rem velit vero! Atque commodi eveniet facilis quia veniam.'
}];

React.render(<Blog blogEntries={blogEntries} />, document.getElementById('container'));