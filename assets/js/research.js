/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Exposing Digital Illusions: A Comparative Analysis of CNN Architectures for Deepfake Detection",
    authors:
      "Advithiya Duddu,Panchadip Bhattacharjee,Gururaj H. L and Shreyas J ",
    conferences:
      "IEEE CONECCT is a premier international conference dedicated to advances in Electronics, Computing and Communication Technologies:2025,
    citebox: "popup1",
    image: "assets\images\experience-page\deepfake.png",
    citation: {
      vancouver:
        Duddu A, Bhattacharjee P, Gururaj HL, Shreyas J. Exposing Digital Illusions: A Comparative Analysis of CNN Architectures for Deepfake Detection. IEEE CONECCT 2020.",
    },
    abstract:
      "Deepfake detection is an important line of defense against online deception, and convolutional neural networks (CNNs) are the cornerstone of contemporary detection frameworks. This paper is a comparison of three CNN frameworks — VGGFace16, DenseNet-121, and a self-designed custom CNN — on real vs. fake face discrimination using a dataset of 140,000+ images. We utilized Explainable AI (XAI) methods, i.e., SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations), to promote the interpretability of our bespoke CNN model. Our methodology attains classification accuracy values above 95% for all models, with the custom CNN showing equivalent performance to pre-trained models and even better. The research shows the advantages of using XAI in deepfake detection while studying architectural trade-offs between computational efficiency and feature extraction. Quantitatively, our tailored CNN obtains an ROC AUC of 0.9956—well above VGGFace16 (0.9601) and DenseNet-121 (0.9924)—and is computationally effective, whereas qualitatively, the application of SHAP and LIME provides transparent explanations of the decision process, improving model transparency and credibility for real-world applications. This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "Edge Resource Management in QKD Networks: An Advanced Simulation and Deep Reinforcement Learning Approach",
    authors:
      "Advithiya Duddu,Panchadip Bhattacharjee,Gururaj H. L and Shreyas J ",
    conferences:
      "IEEE CONECCT is a premier international conference dedicated to advances in Electronics, Computing and Communication Technologies:2025",
    researchYr: 2025,
    citebox: "popup2",
    image: "assets\images\research-page\QKD.png",
    citation: {
      vancouver:
        "Duddu A, Bhattacharjee P, Gururaj HL, Shreyas J. Edge Resource Management in QKD Networks: An Advanced Simulation and Deep Reinforcement Learning Approach. IEEE CONECCT 2025.",
    },
    abstract:
      " Quantum Key Distribution (QKD) networks are crucial to ensure secure communication, while effective resource management is a leading challenge. This work provides cuttingedge simulation and reinforcement learning technique with deep reinforcement learning for edge resource optimization in QKD networks. We present a novel environment retaining the delicacy of the task distribution over multiple edge nodes based on node capacity, task difficulty, and delay. Our solution employs a Double Deep Q-Network (DDQN) for maximizing the best policies of resource usage, which exhibit noteworthy load balance, latency optimization, and overall system efficiency. Our suggested DDQN-based scheduler achieves 820,523 bps secure key rate, a 15-30% improvement over traditional solutions, with a latency decrease of 25% for facilitation of encryption at increased speeds for live secure communication. The solution is also less costly, maximizing resource utilization and decreasing node overloading by 40%, while providing fair allocation and system reliability increase. The process further maximizes cost-efficiency with a minimized cost-per-secure-bit value of 0.01 - 0.058 USD over heuristic scheduling algorithms",
    absbox: "absPopup2",
  },

 //{
 //  title:
 //    "A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks",
 //  authors: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis",
 //  conferences:
 //    "The 58th Annual Meeting of the Association for Computational Linguistics",
 //  researchYr: 2020,
 //  citebox: "popup3",
 //  image: "assets/images/research-page/wordRepresentation.png",
 //  citation: {
 //    vancouver:
 //      "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
 //  },
 //  abstract:
 //    "This is currently left empty and this can be considered as a dummy data 3",
 //  absbox: "absPopup3",
 //},

 //{
 //  title:
 //    "A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking",
 //  authors:
 //    "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou",
 //  conferences:
 //    "The 58th Annual Meeting of the Association for Computational Linguistics",
 //  researchYr: 2020,
 //  citebox: "popup4",
 //  image: "assets/images/research-page/dialogueState.png",
 //  citation: {
 //    vancouver:
 //      "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
 //  },
 //  abstract:
 //    "This is currently left empty and this can be considered as a dummy data 4",
 //  absbox: "absPopup4",
 //},

 //{
 //  title: "Dual Super-Resolution Learning for Semantic Segmentation",
 //  authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
 //  conferences:
 //    "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
 //  researchYr: 2020,
 //  citebox: "popup5",
 //  image: "assets/images/research-page/semanticSegmentation.png",
 //  citation: {
 //    vancouver:
 //      "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
 //  },
 //  abstract:
 //    "This is currently left empty and this can be considered as a dummy data 5",
 //  absbox: "absPopup5",
 //},

 //{
 //  title: "Deep Unfolding Network for Image Super-Resolution",
 //  authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
 //  conferences:
 //    "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
 //  researchYr: 2020,
 //  citebox: "popup6",
 //  image: "assets/images/research-page/deepNetwork.png",
 //  citation: {
 //    vancouver:
 //      "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
 //  },
 //  abstract:
 //    "This is currently left empty and this can be considered as a dummy data 6",
 //  absbox: "absPopup6",
 //},

 //{
 //  title:
 //    "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
 //  authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
 //  conferences:
 //    "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
 //  researchYr: 2020,
 //  citebox: "popup7",
 //  image: "assets/images/research-page/imageDecomposition.png",
 //  citation: {
 //    vancouver:
 //      "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
 //  },
 //  abstract:
 //    "This is currently left empty and this can be considered as a dummy data 7",
 //  absbox: "absPopup7",
 //},
 //{
 //  title:
 //    "Forward and Backward Information Retention for Accurate Binary Neural Networks",
 //  authors:
 //    "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
 //  conferences:
 //    "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
 //  researchYr: 2020,
 //  citebox: "popup8",
 //  image: "assets/images/research-page/neuralNetworks.jpg",
 //  citation: {
 //    vancouver:
 //      "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
 //  },
 //  abstract:
 //    "This is currently left empty and this can be considered as a dummy data 8",
 //  absbox: "absPopup8",
 //},
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
