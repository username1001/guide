webpackJsonp([89949632492916],{5856:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>Functions</h2>\n<p>A function allows you to define a reusable block of code that can be executed many times within your program. </p>\n<p>Functions allow you to create more modular and <a href="https://en.wikipedia.org/wiki/Don&#x27;t_repeat_yourself">DRY</a> solutions to complex problems.</p>\n<p>While Python already provides many built-in functions such as <code>print()</code> and <code>len()</code>, you can also define your own functions to use within your projects.</p>\n<h3>Syntax</h3>\n<p>In Python, a function definition has the following features:</p>\n<ol>\n<li>The keyword <code>def</code></li>\n<li>a function name</li>\n<li>input parameters (optional)</li>\n<li>some block of code to execute</li>\n<li>a return statement (optional)</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token comment" spellcheck="true"># a function with no parameters or returned values</span>\n<span class="token keyword">def</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello!"</span><span class="token punctuation">)</span>\n\nsayHello<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment" spellcheck="true"># calls the function, \'Hello!\' is printed to the console</span>\n\n<span class="token comment" spellcheck="true"># a function with a parameter</span>\n<span class="token keyword">def</span> <span class="token function">helloWithName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello "</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"!"</span><span class="token punctuation">)</span>\n\nhelloWithName<span class="token punctuation">(</span><span class="token string">"Ada"</span><span class="token punctuation">)</span>  <span class="token comment" spellcheck="true"># calls the function, \'Hello Ada!\' is printed to the console</span>\n\n<span class="token comment" spellcheck="true"># a function with multiple parameters with a return statement</span>\n<span class="token keyword">def</span> <span class="token function">multiply</span><span class="token punctuation">(</span>val1<span class="token punctuation">,</span> val2<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  <span class="token keyword">return</span> val1 <span class="token operator">*</span> val2\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>multiply<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment" spellcheck="true"># prints 15 to the console</span>\n</code></pre>\n      </div>\n<p>Functions are blocks of code that can be reused simply by calling the function. This enables simple, elegent code reuse without explicitly re-writing sections of code. This makes code both more readable, makes for easier debugging, and limits typing errors. </p>\n<p>Functions in Python are created using the <code>def</code> keyword, followed by a function name and function parameters inside parentheses.</p>\n<p>The <code>return</code> keyword is used by the function to return a value, if you don’t want to return any value, the default value <code>None</code> will returned. </p>\n<p>The function name is used to call the function, passing the needed parameters inside parentheses.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token comment" spellcheck="true"># this is a basic sum function</span>\n<span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span>\n  <span class="token keyword">return</span> a <span class="token operator">+</span> b\n\nresult <span class="token operator">=</span> sum<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true"># result = 3</span>\n</code></pre>\n      </div>\n<p>You can define default values for the parameters, that way Python will interpretate that the value of that parameter is the default one if none is given.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n  <span class="token keyword">return</span> a <span class="token operator">+</span> b\n\nresult <span class="token operator">=</span> sum<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true"># result = 4</span>\n</code></pre>\n      </div>\n<p>You can pass the parameters in the order you want, using the name of the parameter.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>result <span class="token operator">=</span> sum<span class="token punctuation">(</span>b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> a<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true"># result = 4</span>\n</code></pre>\n      </div>\n<p>However, it is not possible to pass a keyword argument before a non-keyword one</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>result <span class="token operator">=</span> sum<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">#result = 5</span>\nresult2 <span class="token operator">=</span> sum<span class="token punctuation">(</span>b<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">#Will raise SyntaxError</span>\n</code></pre>\n      </div>\n<p>Functions are also Objects, so you can assign them to a variable, and use that variable like a function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code>s <span class="token operator">=</span> sum\nresult <span class="token operator">=</span> s<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true"># result = 3</span>\n</code></pre>\n      </div>\n<h3>Notes</h3>\n<ul>\n<li>\n<p>If a function definition includes parameters, you must provide the same number of parameters when you call the function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>multiply<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment" spellcheck="true"># TypeError: multiply() takes exactly 2 arguments (0 given)</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>multiply<span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment" spellcheck="true"># \'aaaaa\' printed to the console</span>\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>multiply<span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token string">\'b\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment" spellcheck="true"># TypeError: Python can\'t multiply two strings</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>The block of code that the function will run includes all statements indented within the function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'this will print\'</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'so will this\'</span><span class="token punctuation">)</span>\n\nx <span class="token operator">=</span> <span class="token number">7</span>\n<span class="token comment" spellcheck="true"># the assignment of x is not a part of the function since it is not indented</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>Variables defined within a function only exist within the scope of that function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">double</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>\nx <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">2</span>\n<span class="token keyword">return</span> x\n\n<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment" spellcheck="true"># error - x is not defined</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>double<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment" spellcheck="true"># prints 8</span>\n</code></pre>\n      </div>\n</li>\n</ul>\n<h3>More Information:</h3>\n<ul>\n<li><a href=\'https://docs.python.org/3/tutorial/controlflow.html#defining-functions\' target=\'_blank\' rel=\'nofollow\'>Python 3 Docs: Defining Functions</a></li>\n</ul>',fields:{slug:"/python/functions/"},frontmatter:{title:"Functions"}}},pathContext:{slug:"/python/functions/"}}}});
//# sourceMappingURL=path---python-functions-51259a946af95bc6a41b.js.map