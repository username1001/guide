webpackJsonp([0xa764a79ff597],{3901:function(n,a){n.exports={data:{markdownRemark:{html:'<h1>Clean Code Guidelines</h1>\n<p>When coding, the coding style you follow can be really important. Specially when you are working with a team or you plan on sharing your\ncode.\nMost of these guidelines are standard and can be applied to most of the programming languages, however, here you have applications and\nsnippets with c++ code, so you can familiarize with it easier.\nRemember that these are only recommendations for achieving clarity, which can be a personal prefference, so take these pieces of advice\ninto account but don’t take them to the letter. Sometimes breaking some of these rules can lead to cleaner code.</p>\n<h2>Use good variable names and make comments</h2>\n<p>Make sure you create good variable names, for example, if you are creating a game, avoid using the variable “a” use something like “p1” referring to player 1. The <a href="https://en.wikipedia.org/wiki/Hungarian_notation">hungarian notation</a> is commonly spread and can give you some gidelines for declaring variables.</p>\n<p>Also, PLEASE, use comments, I’m not even kidding, just try to read some old projects you did without comments… now imagine being someone else who didn’t even code it.</p>\n<h2>Global variables</h2>\n<p>Global variables can be easy to use, and with little code it might look like a great solution. But, when the code gets larger and larger, it becomes harder to know when are they being used.</p>\n<p>Instead of using global variables you could use variables declared in functions which can help you telling what values are being passed\nand identifying errors faster.</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token macro property">#<span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span>\n<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Global variables are declared outside functions</span>\n<span class="token keyword">int</span> cucumber<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// global variable "cucumber"</span>\n</code></pre>\n      </div>\n<h2>Using goto, continue, etc.</h2>\n<p>This is an usual discussion among programmers, just like global variables, these types of statements are usually considered bad practice.\nThey are considered bad because they lead to <a href="https://en.wikipedia.org/wiki/Spaghetti_code">“spaguetti code”</a>. When we program we want a\nlinear flow, when using those statements the flow is modified and lead to a “twisted and tangled” flow.</p>\n<p>Goto was used in the past when while, for, if functions, however, witht the introduction of those structured programming was created.\nIn general avoid using goto unless you are sure it will make your code cleaner and easier to read. An example might be using it in nested loops.</p>\n<p>The usage of break and continue are practically the same. Use them in switches and try to make functions with an only purpose so you only have one exit point.</p>\n<p><img src="https://imgs.xkcd.com/comics/goto.png" alt="img"></p>\n<h2>Avoid changing the control variable inside of a for loop</h2>\n<p>Usually there are works around this that look clearer and less confusing, eg. while loops.\nDo:</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>\n        i <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n\n    <span class="token operator">++</span>i<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Instead of:</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span> i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n               i <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment" spellcheck="true">// Do work</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Declare constants and types at the top</h2>\n<p>They are usually declared after libraries, this makes them be toguether and easier to read.\nFor local variables it happens the same, declare them at the top (Other people preffer it declaring them as later as possible in order to save memory see: <a href="http://www.cplusplus.com/forum/general/33612/">cplusplus.com</a></p>\n<h2>Use only one return function at the end</h2>\n<p>Just like we said before, we tend to make only one entry and exit to make the flow clearer.</p>\n<h2>Use curly braces even when writing one-liners</h2>\n<p>Making it systematically will help you doing it faster and in case you want to change the code in the future you will be able to do it without worries.</p>\n<p>Instead of:</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n    <span class="token comment" spellcheck="true">//CODE</span>\n</code></pre>\n      </div>\n<p>Do:</p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">//CODE</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Other recommendations</h2>\n<ul>\n<li>\n<h4>Use for when you know the number of iterations, while and do while when you don’t.</h4>\n</li>\n<li>\n<h4>Use const, pass by value/reference when suitable. This will help with saving memory.</h4>\n</li>\n<li>\n<h4>Write const in caps, datatypes starting with T and variables in lower case.</h4>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code><span class="token keyword">const</span> <span class="token keyword">int</span> MAX<span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>             <span class="token comment" spellcheck="true">//Constant</span>\n<span class="token keyword">typedef</span> <span class="token keyword">int</span> TVector<span class="token punctuation">[</span>MAX<span class="token punctuation">]</span><span class="token punctuation">;</span>       <span class="token comment" spellcheck="true">//Data type</span>\nTVector vector<span class="token punctuation">;</span>                 <span class="token comment" spellcheck="true">//Vector</span>\n</code></pre>\n      </div>',fields:{slug:"/cplusplus/Clean code guidelines/"},frontmatter:{title:"Clean Code Guidelines"}}},pathContext:{slug:"/cplusplus/Clean code guidelines/"}}}});
//# sourceMappingURL=path---cplusplus-clean-code-guidelines-eabe1d8dc0df4383f883.js.map