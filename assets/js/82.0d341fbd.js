(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{436:function(t,e,s){"use strict";s.r(e);var r=s(1),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("题目: 神经元表观基因组学和长程投射的全脑对应关系"),s("br"),t._v("\nDOI: "),s("a",{attrs:{href:"https://doi.org/10.1038/s41586-023-06823-w",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doi.org/10.1038/s41586-023-06823-w"),s("OutboundLink")],1),s("br"),t._v("\nCite: Bhattacherjee, A., Zhang, C., Watson, B.R. et al. Spatial transcriptomics reveals the distinct\norganization of mouse prefrontal cortex and neuronal subtypes regulating chronic pain. "),s("em",[t._v("Nat Neurosci")]),t._v(" (2023).")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("相关阅读")]),t._v(" "),s("p",[t._v("微信公众号："),s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwMjM0MzA5MA==&mid=2247485623&idx=1&sn=7c6ac578f4869feca183de172ea18c3f&chksm=c0a7b86af7d0317c1ca1d2197e3a1824dcabc11a71e2111d986a15ee68cf7a2d3c48fc3725b6&scene=178&cur_album_id=3018334051130408969#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读：神经元表观基因组学和长程投射的全脑对应关系"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("作者介绍：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Edward Callaway")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Joseph Ecker")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"https://callaway.salk.edu/wp-content/uploads/sites/40/2023/08/Ed-Callaway-767-2.jpg",height:"200"}})]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("img",{attrs:{src:"https://pbio.salk.edu/wp-content/uploads/sites/36/2018/01/joseph-ecker.jpg",height:"200"}})])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("University of California San Diego")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("The Salk Institute for Biological Studies")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"mailto:callaway@salk.edu"}},[t._v("callaway@salk.edu")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"mailto:ecker@salk.edu"}},[t._v("ecker@salk.edu")])])])])]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("单细胞分析将大脑数十亿个神经元解析为数千个 'cell-type' clusters，这些 clusters 位于不同的大脑结构中。许多细胞类型通过靶向远距离投射介导其功能，从而允许特定细胞类型之间的相互作用。在这里，我们使用 epi-repro-seq 将单细胞表观基因组和细胞类型与 33,034 个神经元的长距离投射联系起来，这些神经元来自 32 个不同区域，投射到整个小鼠大脑的 24 个不同靶点（225 source-to-target combinations）。我们强调使用这些数据来查询与转录组学和表观基因组学相关的投射类型原理，并解决与遗传学相关的细胞类型和连接的假设。我们提供了一个整体合成，其中 926 个统计比较显示了每个 source 投射到每个 target 的神经元的可分辨性。我们将该数据集集成到由数百万神经元组成的更大的大脑倡议细胞普查网络图谱中，以将投射细胞类型与 consensus clusters 联系起来。与空间转录组学的整合进一步将富含投射的 clusters 分配到比原始解剖更小的 source 区域。我们通过对下丘脑、丘脑、后脑、杏仁核和中脑的投射神经元进行深入分析来证明这一点，以深入了解这些细胞类型的特性，包括差异表达的基因、其相关的顺式调节元件和转录因子结合模式，以及神经递质的使用。")]),t._v(" "),s("h2",{attrs:{id:"figure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#figure"}},[t._v("#")]),t._v(" Figure")]),t._v(" "),s("h3",{attrs:{id:"fig-1-the-epigenomic-landscape-of-brain-wide-projection-neurons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fig-1-the-epigenomic-landscape-of-brain-wide-projection-neurons"}},[t._v("#")]),t._v(" Fig. 1 The epigenomic landscape of brain-wide projection neurons")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-023-06823-w/MediaObjects/41586_2023_6823_Fig1_HTML.png?as=webp",alt:"Fig. 1"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Fig. 1 全脑投射神经元的表观基因组景观")]),t._v(" "),s("p",[s("strong",[t._v("a.")]),t._v(" 为了将单神经元表观基因组与它们的投射目标和细胞体位置连接起来，作者使用了 epi-retro-seq。将表达 Cre-recombinase 的 AAV 载体 (AAV-retro-Cre) 注射到 Cre-dependent, nuclear-GFP-expressing 报告小鼠 (INTACT-Cre) 大脑感兴趣的靶区。对 24 个不同的脑靶区各注射 4 只小鼠 (two male and two female)，包括 isocortex (CTX), hippocampal formation, olfactory areas, amygdala (AMY), cerebral nuclei (CNU), interbrain (IB), midbrain (MB), hindbrain (HB) and cerebellum。2 weeks 后，小鼠被杀死，用手将大脑解剖成 32 个可能的 source regions，跨越与 target 注射相同的主要脑结构。对于任何给定的小鼠，选择与已知的 target 投射位置相对应的解剖 sources 进行分析。从解剖的 source 组织中制备细胞核，并对 GFP+ NeuN+ 逆行标记的神经元核进行荧光激活核分选，然后进行 snmC-seq 处理。"),s("br"),t._v(" "),s("strong",[t._v("b.")]),t._v(" 使用 epi-retro-seq (blue dots) 分析了来自 32 个不同 source regions (rows) 的 225 个 source-target combinations 的表达谱，投射到整个小鼠大脑的 24 个不同的 targets (columns)。"),s("br"),t._v(" "),s("strong",[t._v("c.")]),t._v(" 通过 epi-retro-seq 从 225 个 source-target combinations 中提取了 33,034 个 single-nucleus methylomes。研究人员将这些神经元 map 到之前一项研究的 276,187 个神经元的 unbiased snmC-seq 数据上，绘制了神经元分群的联合二维 t-SNE。unbiased snmC-seq 神经元显示为灰色，epi-retro-seq 神经元分别按照 subclass (top)、source regions (middle)、projection targets (bottom) 着色。"),s("br"),t._v(" "),s("strong",[t._v("d.")]),t._v(" 为了查看来自同一 source regions 但 投射到不同 targets 的神经元是否在甲基化水平上具有可区分性。作为一个示例，作者对于投射到 9 个 targets 的 AMY 神经元进行了分析。作者训练了线性模型，根据 DNA 甲基化的方法对不同 targets 神经元进行两两比较，并通过 AUROC 曲线下面积计算模型性能，量化不同的投射类型。"),s("br"),t._v(" "),s("strong",[t._v("e.")]),t._v(" 为了进一步对投射神经元类型进行全面的多模态表征，作者将 epi-retro-seq 数据（n=35,743）、unbias snmC-seq 数据（n=266,740）、以及来自 87 个微解剖脑区 260 万个神经元的 scRNA-seq 数据（n=2,434,472）进行了整合，绘制了整个小鼠脑神经元的联合 t-SNE 图，按细胞 subclass 进行着色。"),s("br"),t._v(" "),s("strong",[t._v("f.")]),t._v(" 作为示例，显示了每个 AMY 细胞群（行）中发现的神经元比例 (prop.)，投射到每个目标（列）。仅显示了富含投射神经元的类集，并且数值在 target 间进行了 z-score 归一化。"),s("br"),t._v(" "),s("strong",[t._v("g.")]),t._v(" 虽然显微解剖有效地分离了相当小的结构，但大多数解剖 source 区包含更小的已知解剖区域，通常如小鼠大脑图谱所示。为了潜在地将来自特定来 source 的投射丰富的类群与更精确的解剖位点联系起来，作者与 MERFISH 数据进行了进一步的整合，允许检查属于特定类群的细胞的空间位置。如图展示了 MERFISH 的矢状脑片，所有神经元按其分配的 subclasses 进行着色。"),s("br"),t._v(" "),s("strong",[t._v("h.")]),t._v(" 单神经元转录组和表观基因组的联合图谱进一步允许分析基于 RNA 表达的投射富集类群中的显著的基因，以及甲基化谱来识别差异甲基化区域（DMRs）作为假定的顺式调节元件（CREs）和转录因子（TFs）的 binding motifs 富集于这些 DMRs。"),s("br"),t._v(" "),s("strong",[t._v("i.")]),t._v(" 基于 motif 富集和基因表达与 DNA 甲基化的相关性，作者构建了以 TFs、DMRs 和靶基因为节点的基因调控网络（GRNs）。GRNs 使我们能够识别出不同数据模式中最一致的变化，从而确定了投射富集类群的候选调控因子。")])]),t._v(" "),s("h3",{attrs:{id:"fig-2-distinguishability-of-neurons-projecting-to-different-targets-across-the-entire-brain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fig-2-distinguishability-of-neurons-projecting-to-different-targets-across-the-entire-brain"}},[t._v("#")]),t._v(" Fig. 2 Distinguishability of neurons projecting to different targets across the entire brain")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-023-06823-w/MediaObjects/41586_2023_6823_Fig2_HTML.png?as=webp",alt:"Fig. 2"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Fig. 2 投射到整个大脑中不同目标的神经元的可区分性")]),t._v(" "),s("p",[s("strong",[t._v("a.")]),t._v(" 为了研究不同来源 (source) 脑区的神经元中，投射到 ET 和 IT targets 的神经元的遗传可区分性，研究人员分析了 10 个 region groups 的 IT 和 ET 投射神经元的 Joint t-SNE。对于皮层来源 (CTX)，跟预期一样，IT 和 ET 投射神经元明显分布在不同的 cluster 中。RHP、TH 来源的神经元，IT 和 ET 投射神经元也被很好地分离。其他来源的神经元，IT 和 ET 神经元表现出不同程度的分离。一般来说，每个来源的 IT 和 ET 都有一定程度的可分离性，但皮层来源的 AUROC 得分高于皮层下来源的。"),s("br"),t._v(" "),s("strong",[t._v("b.")]),t._v(" 22 个来源 (source) 脑区的 IT 与 ET 神经元之间可区分性的 AUROC 分数。"),s("br"),t._v(" "),s("strong",[t._v("c.")]),t._v(" 为了研究不同来源 (source) 脑区 ET 和 IT 投射神经元之间的表观遗传差异是共享的还是不同的。作者使用 22 个来源 (source) 脑区中的 1 个来训练 logistic 回归模型，并测试每个模型是否能够准确地区分其他来源 (source) 脑区的 ET 和 IT 神经元。结果发现，等皮层源 (isocortical) 之间、以及等皮质 (isocortical) 和古皮质（ENT and PIR）区域之间 ET 和 IT 投射神经元之间的表观遗传差异是共享，但是皮层和皮层外区域之间是不同的。"),s("br"),t._v(" "),s("strong",[t._v("d.")]),t._v(" 为了进一步评估这些关系，作者鉴定了每个来源 (source) 脑区的 ET 和 IT 投射神经元之间的差异甲基化基因（DMGs），一共 2,919 个基因。与 c 中 AUROC 的结果一致，这些 DMGs 的 mCH 水平在等皮质 (isocortical) 和古皮质区 (archicortical)、MOB 和 AON、以及 TH 和 MB 的不同部分表现出相似的 fold changes。这些观察结果表明，导致投射靶点和表观遗传学之间关系的机制在皮层区域、MOB 和 AON、以及 AMY、TH 和 MRN 中相对保守，但在这些区域之间存在差异。我们进一步评估了投射到更精细分离的目标组的神经元是否可能或多或少可分离。"),s("br"),t._v(" "),s("strong",[t._v("e.")]),t._v(" 为了进一步评估投射到更精细分离的 target groups 的神经元是否可能或多或少可分离。作者将 ET 和 IT targets 分为三个较精细的组（IT：CTX、MOB、CNU；ET：IB、MB、HB）并查看哪些对 target groups pairs 在 ET 和 IT 之间的可分离性较差。大多数 target groups pairs 比 ET 与 IT 有更好的预测结果，除了 CNU 与 IB 投射细胞相比与 ET 与 IT 相比的区分性较差。"),s("br"),t._v(" "),s("strong",[t._v("f.")]),t._v(" 为了更好地理解哪些类型的基因有助于预测投射目标，作者使用以下五类的基因作为特征来计算 AUROC 得分：神经递质受体(neurotransmitter receptors)、神经肽和受体(neuropeptides and receptors)、离子通道(ion channels)、转录因子(TFs)、神经元投射发育(neuron projection development)。不同类别有不同数量的基因，并且使用更多的基因会增加预测性能。作者降采样基因数目较多的类别样本使其基因数量与较小的类别样本一样，比较了 5 个类别使用从 19 到 666 个基因的 AUROC 分数。结果发现，神经元投射发育基因具有最强的 target 预测能力，其次是神经递质受体、离子通道、神经肽和受体、转录因子、随机选择的基因。使用神经元投射发育类别中的所有 628 个基因，平均 AUROC 为 0.88，略低于使用所有 9906 个基因的特征（AUROC 0.91），这表明来自其他基因本体（GO）类别的其他基因也有助于目标的可预测性。参与神经元投射发育的基因具有更大的预测能力，这与 ET 和 IT 投射神经元（来自不同来源）之间的相似性和差异性与指定投射目标的发育机制相关联的观点相一致。")])]),t._v(" "),s("h3",{attrs:{id:"fig-3-the-diversity-of-cell-type-spatial-location-and-gene-regulation-of-hypothalamic-projection-neurons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fig-3-the-diversity-of-cell-type-spatial-location-and-gene-regulation-of-hypothalamic-projection-neurons"}},[t._v("#")]),t._v(" Fig. 3 The diversity of cell type, spatial location and gene regulation of hypothalamic projection neurons")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-023-06823-w/MediaObjects/41586_2023_6823_Fig3_HTML.png?as=webp",alt:"Fig. 3"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Fig. 3 下丘脑投射神经元的细胞类型、空间位置和基因调控的多样性")]),t._v(" "),s("p",[t._v("因为基因表达和DNA甲基化模式的分析显示，在下丘脑（hypothalamic, HY）中存在大量的细胞类群，表明下丘脑存在高水平的细胞类型多样性。此外，下丘脑由许多不同的亚区域和核组成，每个亚区域都有独特的功能和对先天行为的贡献，如攻击、交配和进食。因此，下丘脑提供了一个很好的用例，可以进一步研究神经元细胞类型的转录和表观基因组特征、它们的投射模式和空间组织之间的关系。"),s("br"),t._v(" "),s("strong",[t._v("a.")]),t._v(" 通过整合 epi-retro-seq（n=1,572）、unbiased snmC-seq（n=11,554）、scRNA-seq（n=148,840）的下丘脑（hypothalamic, HY）数据，作者共鉴定了 94 个神经元细胞类群，其中 17 个类群富含投射信息。"),s("br"),t._v(" "),s("strong",[t._v("b-d.")]),t._v(" 作者查看了这 17 个富含投射信息的神经元类群中，投射到 10 个下游 targets 的比例。HY-to-STR 神经元主要在 cluster 76 中富集，而 HY-to-AMY 神经元只在 cluster 64 中富集，表明不同的 HY 投射神经元具有不同的细胞类型特异性。HY-to-P 和 HY-to-MY 在类群中表现出相似的富集模式，但只有 HY-to-P 神经元在 cluster 76 中富集。同样，HY-to-PFC 和 HY-to-MOB 神经元在 cluster 50 和 cluster 29 中均富集，但 HY-to-MOB 神经元在 cluster 17 中唯一富集。这些结果表明，HY 神经元投射到结构相关的 targets 可能具有一些共同的分子细胞类型，但也表现出一定程度的多样性。这些发现强调了下丘脑神经元投射到不同 targets 的细胞类型的特异性和多样性，阐明了这些细胞类群在各种生理和行为过程中的潜在功能作用。"),s("br"),t._v(" "),s("strong",[t._v("e-f.")]),t._v(" 接下来，作者研究了富含投射信息的 HY 神经元类群的空间分布。通过使用基因表达特征，将这些神经元类群映射到 MERFISH 细胞。这 17 个富含投射信息的类群大多位于不同的 HY 亚区域，并且来自许多类群的细胞的空间分布通过明确的边界来区分。例如，cluster 0、3、76 位于 HY 背外侧的单独的“条纹”中，位于与内脏带或丘脑底核对应的区域。关于投射 targets，一些特定投射富集的 clusters 相对局限于 HY 内的特定区域，而其他投射富集的 clusters 跨越整个 HY。例如，HY-to-TH 投射神经元在 cluster 12、32、3 中富集，所有这些神经元都位于 HY 背侧轮廓清晰的亚区域。相比之下，HY-to-HB 投射神经元富集的 cluster 分布在 HY 的前后轴上，也占据了背腹轴和中外侧轴的位置。总的来说，这些研究结果强调了 HY 内这些富含投射的细胞类群的精细尺度空间组织，以及投射定义的 HY 神经元群体位置的不同程度的空间异质性。这些观察结果也突出了 MERFISH 数据将投射细胞类型与比被解剖区域小得多的位置联系起来的实用性。"),s("br"),t._v(" "),s("strong",[t._v("g-i.")]),t._v(" 为了深入了解投射富集类群的分子特征和基因调控，作者进一步使用了 epi-retro-seq、unbiased snmC-seq、scRNA-seq 的整合分析。在所有的成对比较中，作者在 17 个 clusters 中鉴定了 1163 个差异表达基因（DEGs）。每个 cluster 都有一组不同的 DEGs，即使有几个 clusters 富集到特定 target。值得注意的是，许多 DEGs 被发现参与神经元功能和连接，如图中展示的基因。用倒彩色图绘制的 mCH 水平与相同基因的表达水平惊人地相似，表明甲基化和这些基因在 clusters 间的表达之间的抗作用的相关性。为了研究这些 DEGs 的调控作用，作者鉴定了 148,897 个与之相关的 DMRs。DEG-associated DMRs 的 mCG 水平表现出与基因表达和 gene-body mCH 水平一致的差异甲基化模式。"),s("br"),t._v(" "),s("strong",[t._v("j-k.")]),t._v(" 为了揭示这些 DEGs 的调控网络，作者进一步鉴定了在 CREs 中富集 binding motifs 的 TFs，并构建了一个 HY clusters 的 GRN，连接了 389 个 TFs、46,075 个 DMRs 和 8,184 个靶基因。该网络捕获了跨 clusters 的不同数据模式的一致性变化。例如，Zic1 的 motif 在 cluster 17 和 39 的 hypo-CG-methylated DMRs（hypo-DMRs）中富集，也在这些 cluster 中高水平表达。这些 cluster 位于 HY 的前腹侧部分，并富集于投射到 MOB 的神经元。另一个在这些 cluster 中高水平表达的 TF-encoding gene Zic4 被预测为 ZIC1 的潜在靶点，在侧翼区域有 15 个 DMRs，而 mCG 水平与 ZIC1 和 Zic4 的表达相关。分析显示，一些 clusters 间共享的 TFs 集富集一些投射，如 HY-to-TH。相比之下，在一些其他投射的 cluster 之间识别出更多不同的 TFs 集，如 HY-to-P 或 HY-to-MY。总的来说，这些发现强调了不同的 GRNs 的存在，它们使用不同的 TFs 和 DMRs 来进行不同的下丘脑投射。此外，它们还为了解 HY 中投射富集细胞类群及其相关基因调控的分子机制提供了有价值的见解。")])]),t._v(" "),s("h3",{attrs:{id:"fig-4-the-diversity-of-cell-type-spatial-location-and-gene-regulation-of-thalamic-projection-neurons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fig-4-the-diversity-of-cell-type-spatial-location-and-gene-regulation-of-thalamic-projection-neurons"}},[t._v("#")]),t._v(" Fig. 4 The diversity of cell type, spatial location and gene regulation of thalamic projection neurons")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-023-06823-w/MediaObjects/41586_2023_6823_Fig4_HTML.png?as=webp",alt:"Fig. 4"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Fig. 4 丘脑投射神经元的细胞类型、空间位置和基因调控的多样性")]),t._v(" "),s("p",[t._v("TH 是感觉和皮层信息处理的主要枢纽，也投射到皮层下结构。和 HY 一样，TH 由大量的核组成，这些核被组织成许多功能的组，比本文的解剖区域要小。TH 的主要中心区域仅由兴奋性区域组成（除背外侧膝状核（LGd）中的少数局部 GABAergic 中间神经元外），这些区域与皮质区域相互连接。TH 的其他腹侧和外侧区域（如腹外侧膝状核和网状丘脑核）包含 GABAergic 抑制神经元，这些神经元要么与丘脑兴奋神经元相互连接，要么投射到基底神经节和脑干。与 HY 相比，TH 具有较低程度的细胞类型复杂性，通过基因表达分析确定的细胞簇数量较少。尽管 TH 和 HY 显示高水平的异质性解剖核和投射，细胞类型复杂性的差异促使作者调查是否细胞类型之间的关系，他们的投射和空间位置 TH 不同于那些观察到的 HY，如上面所讨论的。\n作者分析了投射到 12 个不同目标的丘脑神经元。为了全面了解这些神经元，作者结合了 epi-retro-seq 数据与 unbiased snmC-seq 和 scRNA-seq 数据。通过这种整合，作者共鉴定了 58 个丘脑神经元细胞类群，其中 33 个类群富集于 epi-retro-seq 神经元。作者对这些 TH 类群进行了 HY 相同的分析。")])]),t._v(" "),s("h3",{attrs:{id:"fig-5-neurotransmitter-usage-in-hb-amy-and-vta-projection-neurons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fig-5-neurotransmitter-usage-in-hb-amy-and-vta-projection-neurons"}},[t._v("#")]),t._v(" Fig. 5 Neurotransmitter usage in HB, AMY and VTA projection neurons")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-023-06823-w/MediaObjects/41586_2023_6823_Fig5_HTML.png?as=webp",alt:"Fig. 5"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Fig. 5 HB、AMY 和 VTA 投射神经元的神经递质使用情况")]),t._v(" "),s("p",[t._v("为了系统地检查不同投射对神经递质的使用，作者量化了之前描述的 12 个分组的大脑区域中每个投射富集的类群中 9 个典型的神经递质转运基因的表达水平。这些基因包括：\nSlc17a7 (Vglut1), Slc17a6 (Vglut2) and Slc17a8 (Vglut3) for glutamatergic neurons；Slc32a1 (Vgat) for GABAergic neurons；Slc6a2 (Net) for noradrenergic neurons；Slc6a3\n(Dat) for dopaminergic neurons；Slc6a4 (Sert) for serotonergic neurons；Slc6a5 (Glyt2) for glycinergic neurons；Slc18a3 (Vacht) for cholinergic neurons；Hdc for histaminergic neurons。"),s("br"),t._v(" "),s("strong",[t._v("a.")]),t._v(" 作者分析了 11 个 HB 投射，包括从 P 或 MY 到 5 个不同 targets --- TH、HY、SC、cerebellar nuclei、cerebellar cortex (CBX)，以及从 P 到 MY的投射。这些投射在总共 128 个 HB clusters 中的 20 个细胞类群中富集。"),s("br"),t._v(" "),s("strong",[t._v("b.")]),t._v(" 这 20 个投射富集的类群显示了 6 个神经递质转运体基因的表达。大多数这些类群，如 MY-to-CBX 富集的 cluster 76，包含表达 Slc17a6 的谷氨酸能神经元。值得注意的是，Slc17a7（编码 VGLUT1）和 Slc17a6（编码 VGLUT2）在 cluster 0 神经元中共同表达，这些神经元富集于 P-to-CBX 投射。此外，不同的神经递质被用于相同的投射类群。例如，clusters 10、11 和 27 富集 P-to-HY 投射。其中，cluster 10 为 GABAergic，cluster 11 为 glutamatergic，cluster 27 为 serotonergic，显示 Slc6a4（编码 SERT）和 Slc17a8（编码 VGLUT3）共表达。"),s("br"),t._v(" "),s("strong",[t._v("c.")]),t._v(" 此外，当映射到 MERFISH 数据时，一些 clusters 也显示出独特的空间分布，如 clusters 0、76、10、27。总之，这些结果强调了 HB 投射中分子、细胞和空间特异性和多样性的程度。"),s("br"),t._v(" "),s("strong",[t._v("d.")]),t._v(" 作者观察到，从 P 或 MY 投射到 CBX 的神经元不同于来自相同区域的其他投射。为了进一步研究这一点，作者检测了在 P 或 MY 中可以区分 CBX 投射神经元和其他投射神经元的分子特征。通过对 gene-body DNA 甲基化的分析，确定了可以将 P-to-CBX cluster(0) 与其他投射相关的 P clusters 区分开来，或将 MY-to-CBX cluster(76) 与其他投射相关的 MY cluster 区分开来的基因。值得注意的是，两组基因的 top 100 genes 中只有 5 个共同基因存在，即Slit3、Phactr3、Pcbp3、Atp10a、Cdk14。这 5 个共同的基因可能调解功能共享 mossy fibres 和 climbing fibres 都指向 CBX，而大量的基因不共享可能与 MY 和 P 的不同功能和/或投射小到 cerebellar Purkinje cells 与 granule cells 有关。"),s("br"),t._v(" "),s("strong",[t._v("e.")]),t._v(" 为了了解 CBX 投射神经元中的 DEGs 是如何被调控的，作者在 HB 中发现了 223,839 个与 CBX 投射神经元相关的 hypo-DMRs。这些 DMRs 被进一步划分为在 P-to-CBX 或 MY-to-CBX 中被低甲基化的亚群，并且只有有限数量的细胞在两者中都被低甲基化。总的来说，这些发现表明，CBX 与 P 和 MY 中其他投射的分子机制在很大程度上是不同的，但在转录组和表观基因组水平上都有一些共同的特征。"),s("br"),t._v(" "),s("strong",[t._v("f.")]),t._v(" 作者还检测了从 AMY 到 9 个不同 targets（PFC、ENT、HIP、MOB、STR、TH、VTA、P、MY） 的投射。这些投射在 16 个 AMY clusters 中富集，不同的 clusters 富集投射到 IT targets 和 ET targets 的神经元。"),s("br"),t._v(" "),s("strong",[t._v("g.")]),t._v(" 富集 IT 投射的 clusters 主要是谷氨酸能的，并表达了 Slc17a7 和/或 Slc17a6。相比之下，富于 ET 投射的 clusters 被分为表达 Slc17a6 的谷氨酸能 clusters 和表达 Slc32a1 的 GABAergic 能 clusters。总之，这些研究结果强调了 AMY 投射神经元中神经递质及其转运体利用的异质性。"),s("br"),t._v(" "),s("strong",[t._v("h-i.")]),t._v(" 为了更好地检查 VTA 神经元投射到不同的 targets 和使用神经递质之间的关系，作者分析了特定 marker genes 的 mCH 水平，包括 tyrosine hydroxylase (Th) for dopaminergic neurons、 Gad2 for GABAergic neurons、Slc17a6 for glutamatergic neurons。一般来说，投射到皮层的 VTA 神经元相比于投射到皮层下在 Th 中有更低的 mCH 水平（VTA-to-STR 除外），表明 Th 有更高的表达水平。CTX 投射神经元在 Slc17a6 中也表现出较低的 mCH 水平，表明 Slc17a6 有更高的表达水平。因此，这些 CTX 投射的 VTA 神经元可能是 Th+ and Slc17a6+，并同时使用多巴胺和谷氨酸。与 VTA-to-CTX 神经元相反的是，VTA-to-STR 神经元分成两组，Th+Slc17a6− 和 Th−Slc17a6+，有很小比例的神经元同时表达 Th+ 和 Slc17a6+。总的来说，这些研究结果证实了之前关于不同的 VTA 神经元群体使用单一或组合神经递质的报道，并突出了不同投射中不同神经递质使用的复杂模式。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);