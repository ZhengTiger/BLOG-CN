(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{474:function(t,s,e){"use strict";e.r(s);var i=e(1),a=Object(i.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("题目: scRNAseq imputation 方法的系统评价"),e("br"),t._v("\nDOI: "),e("a",{attrs:{href:"https://doi.org/10.1186/s13059-020-02132-x",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doi.org/10.1186/s13059-020-02132-x"),e("OutboundLink")],1),e("br"),t._v("\nCite: Hou, W., Ji, Z., Ji, H. et al. A systematic evaluation of single-cell RNA-sequencing imputation methods. "),e("em",[t._v("Genome Biol")]),t._v(" 21, 218 (2020).")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("相关阅读")]),t._v(" "),e("p",[t._v("微信公众号："),e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwMjM0MzA5MA==&mid=2247484007&idx=1&sn=81dfda914cf0fbfb77ed0723b5eee766&chksm=c0a7b2baf7d03bac1891ea32ab193dd55f6e4070c871b67cd57e0ec88551c60455ac083003e9&token=549238884&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读：scRNAseq imputation 方法的系统评价"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[t._v("作者介绍：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Stephanie Hicks")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Hongkai Ji")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"https://publichealth.jhu.edu/sites/default/files/styles/profile/public/images/3639.jpg",width:"200"}})]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:"https://publichealth.jhu.edu/sites/default/files/styles/profile/public/images/1943.jpg",width:"200"}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Johns Hopkins Bloomberg School of Public Health")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Johns Hopkins Bloomberg School of Public Health")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"mailto:shicks19@jhu.edu"}},[t._v("shicks19@jhu.edu")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"mailto:hji@jhu.edu"}},[t._v("hji@jhu.edu")])])])])]),t._v(" "),e("h2",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract:")]),t._v(" "),e("p",[e("strong",[t._v("Background:")]),t._v(" scRNA-seq 技术的快速发展导致了许多去除系统技术噪声方法的出现，包括旨在解决单细胞数据稀疏性的 imputation 方法。虽然已经发展了许多 imputation 方法，但对于这些方法如何相互比较尚未达成共识。"),e("br"),t._v(" "),e("strong",[t._v("Results:")]),t._v(" 在这里，我们对 18 种 scRNA-seq imputation 方法进行了系统的评估，以评估其准确性和可用性。我们按照以下标准进行了基准测试：imputed cell profiles 和 bulk samples 之间的相似性、是否恢复相关的生物信号或在下游分析(差异表达，无监督聚类，拟时序分析)中引入伪噪声、以及它们的计算运行时间、内存占用、可伸缩性。方法使用来自细胞系和组织以及来自基于平板和基于液滴的单细胞平台的数据进行评估。"),e("br"),t._v(" "),e("strong",[t._v("Conclusions:")]),t._v(" 我们发现大多数 scRNA-seq imputation 方法与不进行 imputation 相比，在恢复  bulk RNA-seq 中观察到的基因表达方面表现更好。然而，与不进行 imputation 相比，大多数方法并没有提高下游分析的性能，特别是在聚类和轨迹分析方面，因此应谨慎使用。此外，我们发现在每个评估方面，不同方法的性能有很大的可变性。总的来说，MAGIC、kNN-smoothing、SAVER 表现优于其他方法。")]),t._v(" "),e("h2",{attrs:{id:"results"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results:")]),t._v(" "),e("p",[t._v("目前 imputation 方法可以大致分为三类：")]),t._v(" "),e("ol",[e("li",[t._v("使用概率模型直接建模稀疏性的方法。代表方法：bayNorm, SAVER, SAVER-X, scImpute, scRecover, VIPER。")]),t._v(" "),e("li",[t._v("通过在具有相似表达谱身份的细胞（ 例如，使用 graph 中的 neighbors）中，通过平滑或扩散基因表达的值来调整所有值（zero and non-zero）。代表方法：DrImpute, MAGIC, kNN-smoothing。")]),t._v(" "),e("li",[t._v("首先通过基于低秩矩阵的方法（捕获线性关系）或深度学习方法（捕获非线性关系）来识别细胞的潜在空间表示，然后从低秩或估计的潜在空间中重建观察到的表达矩阵，这将不再是稀疏的。深度学习代表方法：AutoImpute, DCA, DeepImpute, SAUCIE, scScope, scVI。低秩矩阵代表方法：ALRA, mcImpute, PBLR。")])]),t._v(" "),e("h3",{attrs:{id:"fig-1-motivation-and-overview-of-benchmark-evaluation-of-scrna-seq-imputation-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fig-1-motivation-and-overview-of-benchmark-evaluation-of-scrna-seq-imputation-methods"}},[t._v("#")]),t._v(" Fig. 1 Motivation and overview of benchmark evaluation of scRNA-seq imputation methods")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs13059-020-02132-x/MediaObjects/13059_2020_2132_Fig1_HTML.png?as=webp",alt:"Fig. 1"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Fig. 1 scRNA-seq imputation 方法的基准评估的动机和概述")]),t._v(" "),e("p",[e("strong",[t._v("a.")]),t._v(" 使用 no imputation method（no_imp 用红色突出显示）和 18 种 imputation methods 进行主成分分析（PCA）后的降维结果。颜色表示每个细胞的 library size（定义为所有 features 的 counts 和）。使用的数据为 null simulations data，预期应该是没有结构模式的。可以看到一些方法在进行 imputation 后引入了虚假的结构模式。MAGIC、 kNN-smoothing、SAVER 效果较好，看起来跟 no_imp 相似。"),e("br"),t._v(" "),e("strong",[t._v("b.")]),t._v(" 基准比较评价 18 种 scRNA-seq imputation methods 的概述。")])]),t._v(" "),e("h3",{attrs:{id:"fig-2-similarity-between-bulk-and-imputed-single-cell-expression-data-in-cell-lines"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fig-2-similarity-between-bulk-and-imputed-single-cell-expression-data-in-cell-lines"}},[t._v("#")]),t._v(" Fig. 2 Similarity between bulk and imputed single-cell expression data in cell lines")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs13059-020-02132-x/MediaObjects/13059_2020_2132_Fig2_HTML.png?as=webp",alt:"Fig. 2"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Fig. 2 细胞系中 bulk 和 imputed single-cell 表达数据的相似性")]),t._v(" "),e("p",[e("strong",[t._v("a-d:")]),t._v(" 直接比较了来自相同细胞系的 imputed scRNA-seq profiles 和 bulk RNA-seq profile。测试数据包括 5 个 CellBench cell lines (sc_10x_5cl) 的 10x Genomics UMI-based scRNA-seq data，和 5 个 ENCODE cell lines (ENCODE_fluidigm_5cl) 的  Fluidigm C1 plate-based scRNA-seq read count data。"),e("br"),t._v(" "),e("strong",[t._v("a.")]),t._v(" 展示了 H1975 细胞系，scran normalized log2-transformed scRNA-seq  profiles (N = 440 gene)（pseudobulk）与  bulk RNA-seq profile 的 Spearman's correlation coefficient(SCC)。"),e("br"),t._v(" "),e("strong",[t._v("b.")]),t._v(" 展示了 imputed 后 (e.g., using scVI)，pseudobulk 与 bulk RNA-seq 的 SCC。"),e("br"),t._v(" "),e("strong",[t._v("c.")]),t._v(" 展使用不同软件 imputed 后 single-cell profiles 与 bulk RNA-seq profiles 的 SCC。"),e("br"),t._v(" "),e("strong",[t._v("d.")]),t._v(" 两个不同平台的 5 个不同数据集 pseudobulk 与 bulk RNA-seq 的 SCC。通过结果可以看到 SAVER 和 SAVER-X 对于 10x 平台比 Fluidigm 平台效果好。scVI, DCA, MAGIC 在两个平台中的表现都优于其他方法。"),e("br"),t._v(" "),e("strong",[t._v("e-h:")]),t._v(" 对同一平台不同细胞系数据之间两两组合计算 LFC(log fold change)，比较方法同 a-d。与之前的结果相似，SAVER 和 SAVER-X 对于 10x 平台比 Fluidigm 平台效果好。scVI, DCA, MAGIC 在两个平台中的表现都优于其他方法。")])]),t._v(" "),e("h3",{attrs:{id:"fig-3-impact-of-imputation-methods-on-differential-expression-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fig-3-impact-of-imputation-methods-on-differential-expression-analysis"}},[t._v("#")]),t._v(" Fig. 3 Impact of imputation methods on differential expression analysis")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs13059-020-02132-x/MediaObjects/13059_2020_2132_Fig3_HTML.png?as=webp",alt:"Fig. 3"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Fig. 3 imputation 方法对差异表达分析的影响")]),t._v(" "),e("p",[e("strong",[t._v("a.")]),t._v(" 利用 bulk RNA-seq 和 scRNA-seq 之间的重叠来评估差异表达基因（DEGs）的示意图。H2228 与 A594 两个细胞系之间比较。"),e("br"),t._v(" "),e("strong",[t._v("b-d:")]),t._v(" 利分别用 MAST(x-axis) 和 Wilcoxon rank-sum test(y-axis) 识别的 bulk RNA-seq 与 scRNA-seq 之间 DEGs 的 overlap。"),e("br"),t._v(" "),e("strong",[t._v("e-h:")]),t._v(" 将同一单细胞数据分为两份，分别用 MAST(x-axis) 和 Wilcoxon rank-sum test(y-axis) 计算两组之间 DEGs 的平均 log-fold change (LFC)。"),e("br"),t._v(" "),e("strong",[t._v("i.")]),t._v(" 使用标记基因（如CD19）的表达水平预测 PBMC 细胞类型的 ROC 值热图。ImputationFail 表示预测失败。"),e("br"),t._v(" "),e("strong",[t._v("jk:")]),t._v(" 使用 bulk 和 single-cell 识别的 DEGs，top 10% 或 bottom 10% 的 overlap。")])]),t._v(" "),e("h3",{attrs:{id:"fig-4-impact-of-imputation-methods-on-unsupervised-clustering-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fig-4-impact-of-imputation-methods-on-unsupervised-clustering-analysis"}},[t._v("#")]),t._v(" Fig. 4 Impact of imputation methods on unsupervised clustering analysis")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs13059-020-02132-x/MediaObjects/13059_2020_2132_Fig4_HTML.png?as=webp",alt:"Fig. 4"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Fig. 4 imputation 方法对无监督聚类分析的影响")]),t._v(" "),e("p",[e("strong",[t._v("a.")]),t._v(" 通过四个指标来评价聚类效果：entropy of cluster accuracy (Hacc), entropy of cluster purity (Hpur), adjusted Rand index (ARI), and median Silhouette index。不同方法按照前三个指标的均值和第四个指标进行排序。"),e("br"),t._v(" "),e("strong",[t._v("b.")]),t._v(" 应用 PCA 降维的结果，左边 no imputation，右边使用 MAGIC imputation。颜色表示真实的分群标签。"),e("br"),t._v(" "),e("strong",[t._v("c.")]),t._v(" Louvain clustering (x-axis) 和 k-means clustering (y-axis) 的总体得分（四个指标的均值）。"),e("br"),t._v(" "),e("strong",[t._v("d–f:")]),t._v(" 与 a-c 相同的分析，使用 PBMC_10x_tissue dataset。")])]),t._v(" "),e("h3",{attrs:{id:"fig-5-impact-of-imputation-methods-on-inferred-trajectories-for-pseudotime-analysis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fig-5-impact-of-imputation-methods-on-inferred-trajectories-for-pseudotime-analysis"}},[t._v("#")]),t._v(" Fig. 5 Impact of imputation methods on inferred trajectories for pseudotime analysis")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs13059-020-02132-x/MediaObjects/13059_2020_2132_Fig5_HTML.png?as=webp",alt:"Fig. 5"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Fig. 5 imputation 方法对拟时序分析推断轨迹的影响")]),t._v(" "),e("p",[e("strong",[t._v("a.")]),t._v(" 使用 TSCAN 推断的轨迹与使用 RNA mixture and cell mixture datasets 的真实轨迹之间的 Pearson correlation coefficients (PCC)。TrajjectoryFail 表示推断轨迹失败。"),e("br"),t._v(" "),e("strong",[t._v("b.")]),t._v(" 使用 TSCAN 推断的轨迹与真实轨迹之间细胞的 overlap，即推断轨迹正确的细胞比例。"),e("br"),t._v(" "),e("strong",[t._v("c.")]),t._v(" 使用 Monocle 2 (x-axis) 和 TSCAN (y-axis) 进行推断轨迹的 PCC。"),e("br"),t._v(" "),e("strong",[t._v("d.")]),t._v(" 使用 Monocle 2 (x-axis) 和 TSCAN (y-axis) 进行推断轨迹的正确 overlap。"),e("br"),t._v(" "),e("strong",[t._v("e.")]),t._v(" 使用 HCA_10x_tissue 数据和 Monocle 2 推断轨迹的结果，使用  kNN-smoothing 进行 imputation。颜色表示使用 bulk RNA-seq 数据定义的真实细胞类型。"),e("br"),t._v(" "),e("strong",[t._v("f.")]),t._v(" 使用 Monocle 2 (x-axis) 和 TSCAN (y-axis) 进行推断轨迹细胞排序正确的百分比。")])]),t._v(" "),e("h3",{attrs:{id:"fig-6-overall-summary-of-results-evaluating-imputation-methods-for-scrna-seq-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fig-6-overall-summary-of-results-evaluating-imputation-methods-for-scrna-seq-data"}},[t._v("#")]),t._v(" Fig. 6 Overall summary of results evaluating imputation methods for scRNA-seq data")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs13059-020-02132-x/MediaObjects/13059_2020_2132_Fig6_HTML.png?as=webp",alt:"Fig. 6"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Fig. 6 评价 scRNA-seq 数据 imputation 方法的结果总体总结")]),t._v(" "),e("p",[t._v("考虑了以下这些方面进行性能评判：")]),t._v(" "),e("ul",[e("li",[t._v("imputed single-cell 和 bulk profiles 之间的相似性 (bulk correlation）")]),t._v(" "),e("li",[t._v("differential expression (differential)")]),t._v(" "),e("li",[t._v("unsupervised clustering (clustering)")]),t._v(" "),e("li",[t._v("trajectory inference (trajectory)")]),t._v(" "),e("li",[t._v("time, memory usage, and scalability\\")])]),t._v(" "),e("p",[e("strong",[t._v("a-c:")]),t._v(" a. UMI-based and plate-based (Fluidigm) protocols，b. using UMI-based data only，c. using Fluidigm data only，基于所有性能的排序。"),e("br"),t._v(" "),e("strong",[t._v("d.")]),t._v(" 针对 accuracy/efficiency，UMI-based/plate-based，来对不同方法排序。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);