webpackJsonp([87208316601967],{6126:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Tuple Type</h1>\n<p>Express an array in which a fixed number of elements of types is known, but not the same.</p>\n<div class="gatsby-highlight">\n      <pre class="language-typescript"><code><span class="token keyword">let</span> arr<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// This is correct</span>\narr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'Hello\'</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">//This is incorrect</span>\narr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">\'Hello\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>When accessing an element outside the known indices, it will use a union type:</p>\n<div class="gatsby-highlight">\n      <pre class="language-typescript"><code>arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'World!\'</span>\n<span class="token comment" spellcheck="true">// OK, \'string\' can be assigned to \'string | number\'</span>\n\n<span class="token comment" spellcheck="true">// Error, \'boolean\' is not a \'string | number\'</span>\narr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Error, \'boolean\' is not a \'string | number\'</span>\n</code></pre>\n      </div>',fields:{slug:"/typescript/tuple-type/"},frontmatter:{title:"Tuple Type"}}},pathContext:{slug:"/typescript/tuple-type/"}}}});
//# sourceMappingURL=path---typescript-tuple-type-f8585f17c9a9b07c4dc0.js.map