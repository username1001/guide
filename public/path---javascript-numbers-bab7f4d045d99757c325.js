webpackJsonp([0xf66b60d341a5],{4434:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Numbers</h2>\n<p>The implementation of JavaScript’s <code>number</code>s is based on the <code>IEEE 754</code> standard, often called “floating-point.” </p>\n<p><a href=\'https://en.wikipedia.org/wiki/IEEE_754\' target=\'_blank\' rel=\'nofollow\'>IEEE 754 Wikipedia Link</a>\n<br>\n<a href=\'http://bartaz.github.io/ieee754-visualization/\' target=\'_blank\' rel=\'nofollow\'>IEEE 754 Double Precision Floating Point Visualization</a></p>\n<p>Number literals are expressed generally as <code>base-10</code> decimal literals.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">47</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token number">47.9</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The leading portion of a decimal value, if <code>0</code>, is optional:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> same <span class="token operator">=</span> <span class="token number">0.47</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> stillSame <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token number">47</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Similarly, the trailing portion (the fractional) of a decimal value after the <code>.</code>, if <code>0</code>, is optional:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">47.0</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">47</span><span class="token punctuation">.</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>By default, most numbers will be outputted as <code>base-10</code> decimals, with trailing fractional <code>0</code>s removed. So:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">47.300</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token number">47.0</span><span class="token punctuation">;</span>\n\nfoo<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 47.3</span>\nbar<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 47</span>\n</code></pre>\n      </div>\n<p>Very large or very small <code>number</code>s can be written as:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">47e8</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 4700000000</span>\n<span class="token keyword">var</span> baz <span class="token operator">=</span> <span class="token number">47e-8</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 00.00000047  </span>\n</code></pre>\n      </div>\n<p><code>toExponential</code> method can be used to convert a <code>number</code> into its <code>exponential notation</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">47e8</span><span class="token punctuation">;</span>\nfoo<span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// 4700000000</span>\nfoo<span class="token punctuation">.</span><span class="token function">toExponential</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment" spellcheck="true">//"47e8"</span>\n</code></pre>\n      </div>\n<p>Numbers have access to methods that are built into <code>Number.prototype</code>.</p>\n<p>For Example:\n<code>toFixed()</code> method formats a number with a specific number of digits to the right of the decimal.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">47.69</span><span class="token punctuation">;</span>\nfoo<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// "48"</span>\nfoo<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// "47.7"</span>\nfoo<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// "47.69"</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>Type <code>Number.prototype</code> in your browser and see other available methods yourself.</p>\n</blockquote>\n<h4>More Information:</h4>\n<ol>\n<li><a href=\'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type\' target=\'_blank\' rel=\'nofollow\'>MDN</a></li>\n<li><a href=\'https://www.w3schools.com/js/js_numbers.asp\' target=\'_blank\' rel=\'nofollow\'>JavaScript Numbers</a></li>\n</ol>\n<h4>References</h4>\n<ol>\n<li><a href=\'https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar\' target=\'_blank\' rel=\'nofollow\'>Types &#x26; grammar</a> by Kyle Simpson.</li>\n</ol>',fields:{slug:"/javascript/numbers/"},frontmatter:{title:"Numbers"}}},pathContext:{slug:"/javascript/numbers/"}}}});
//# sourceMappingURL=path---javascript-numbers-bab7f4d045d99757c325.js.map