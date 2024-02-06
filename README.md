# TeXBook

## TikZ to SVG

<https://www.latex4technics.com/?note=27RX>

```tex
\documentclass[crop,tikz,convert={outext=.svg,command=\unexpanded{pdf2svg \infile\space\outfile}},multi=false]{standalone}[2012/04/13]

\usepackage{pgfplots}
\pgfplotsset{compat = newest}
\usepgfplotslibrary{statistics}
\usetikzlibrary{datavisualization}
\usetikzlibrary{positioning}
\usetikzlibrary{shapes.geometric, shapes.misc}
\usetikzlibrary{patterns}
\usetikzlibrary{calc}

\begin{document}
    \begin{tikzpicture}
        % Your tikz code here
    \end{tikzpicture}
\end{document}
```
