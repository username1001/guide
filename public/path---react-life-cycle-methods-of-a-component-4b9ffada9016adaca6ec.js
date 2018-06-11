webpackJsonp([23753388798616],{5919:function(e,o){e.exports={data:{markdownRemark:{html:"<h2>Life Cycle Methods Of A Component</h2>\n<p>When we start working with components, we need to perform several actions to update state or to perform some actions when something changes in that component. In this scenario, life-cycle methods of a component comes handy !! So let us dive into them in this article.</p>\n<p>Broadly, we can divide the life cycle methods into <strong>3</strong> categories.</p>\n<ol>\n<li>Mounting</li>\n<li>Updating</li>\n<li>Unmounting</li>\n</ol>\n<p>As life cycle methods are self explanatory, I’m just going to mention the method names. Please feel free to contribute to this article, if necessary.</p>\n<p><strong>Mounting:</strong></p>\n<p>a. <code>constructor()</code></p>\n<p>b. <code>componentWillMount()</code></p>\n<p>c. <code>render()</code></p>\n<p>d. <code>componentDidMount()</code></p>\n<p><strong>Updating:</strong></p>\n<p>a. <code>componentWillRecieveProps()</code></p>\n<p>b. <code>shouldComponentUpdate()</code></p>\n<p>c. <code>componentWillUpdate()</code></p>\n<p>d. <code>render()</code></p>\n<p>e. <code>componentDidUpdate()</code></p>\n<p><strong>Unmounting:</strong></p>\n<p>a. <code>componentWillUnmount()</code></p>\n<p><strong>Some interesting facts to notice:</strong>  </p>\n<ul>\n<li><code>constructor</code>, <code>componentWillMount</code>, <code>componentDidMount</code> and <code>componentWillUnmount</code> will be called only once during the lifecycle of a component.</li>\n<li><code>componentWillUpdate</code>,  and <code>componentDidUpdate</code> will only be executed if and only if <code>shouldComponentUpdate</code> returns true.</li>\n<li><code>componentWillUnmount()</code>will be called just before unmounting any component and hence can be used to free up the used memory, close any connections to DB, etc.</li>\n</ul>\n<p>Many things can be learnt by diving into coding. So get your hands dirty by coding.</p>\n<p>Happy Coding !!!</p>",fields:{slug:"/react/life-cycle-methods-of-a-component/"},frontmatter:{title:"Life Cycle Methods Of A Component"}}},pathContext:{slug:"/react/life-cycle-methods-of-a-component/"}}}});
//# sourceMappingURL=path---react-life-cycle-methods-of-a-component-4b9ffada9016adaca6ec.js.map