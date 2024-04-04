# MathStock

MathStock is a collection of LaTeX format Math Examinations and Solutions.

## License

This repository is licensed under no license. Rights of the questions and solutions are reserved to the each university and the author of the solutions.

## Development

### TikZ to SVG

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
