import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def generate_pdf():
    pdf_path = r"c:\Users\l\Desktop\MyPokemonJourney\my-pokemon-journey\public\resume.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    name_style = ParagraphStyle(
        'DocName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111827')
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#374151')
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0f172a'),
        textTransform='uppercase'
    )

    body_bold = ParagraphStyle(
        'BodyBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#111827')
    )

    body_regular = ParagraphStyle(
        'BodyRegular',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#374151')
    )

    bullet_style = ParagraphStyle(
        'BulletItem',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#1f2937'),
        leftIndent=12,
        firstLineIndent=-8
    )

    story = []

    # Header
    story.append(Paragraph("Aarush Dhuri", name_style))
    story.append(Spacer(1, 4))
    contact_text = (
        '+91 72089 80975 &nbsp;|&nbsp; '
        '<a href="mailto:aarushdhuri7@gmail.com"><font color="#1d4ed8">aarushdhuri7@gmail.com</font></a> &nbsp;|&nbsp; '
        '<a href="https://www.linkedin.com/in/aarush-dhuri/"><font color="#1d4ed8">LinkedIn</font></a> &nbsp;|&nbsp; '
        '<a href="https://github.com/aarushdhuri7"><font color="#1d4ed8">GitHub</font></a>'
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 10))

    def make_section(title):
        elements = []
        elements.append(Paragraph(f"<b>{title}</b>", section_heading))
        elements.append(Spacer(1, 2))
        elements.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#1e293b'), spaceAfter=6, spaceBefore=1))
        return elements

    # EDUCATION
    story.extend(make_section("EDUCATION"))
    
    edu_data = [
        [
            Paragraph("<b>Rahul International School</b><br/><font color='#4b5563' size=8.5>12th Grade – 74.02%</font>", body_regular),
            Paragraph("<b>Mumbai, India</b><br/><font color='#4b5563' size=8.5>2022 – 2024</font>", ParagraphStyle('R1', parent=body_regular, alignment=TA_RIGHT))
        ],
        [
            Paragraph("<b>NMIMS Deemed-to-be-University, MPSTME</b><br/><font color='#4b5563' size=8.5>B.Tech in Data Science – CGPA: 8.72/10</font>", body_regular),
            Paragraph("<b>Mumbai, India</b><br/><font color='#4b5563' size=8.5>2024 – 2028</font>", ParagraphStyle('R2', parent=body_regular, alignment=TA_RIGHT))
        ]
    ]
    edu_table = Table(edu_data, colWidths=[380, 160])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 6))

    # PROJECTS
    story.extend(make_section("PROJECTS"))

    # Project 1: Brain Battery Check
    p1_header = [
        [
            Paragraph("<b>Brain Battery Check</b> – Mental Health Score Prediction Platform &nbsp;|&nbsp; <font size=8 color='#4b5563'><i>Python, Scikit-learn, FastAPI, Pandas</i></font>", body_regular),
            Paragraph('<a href="https://github.com/aarushdhuri7/Brain-Battery-Check.git"><font color="#1d4ed8"><b>GitHub</b></font></a> &nbsp;2026', ParagraphStyle('PR1', parent=body_regular, alignment=TA_RIGHT))
        ]
    ]
    t_p1 = Table(p1_header, colWidths=[420, 120])
    t_p1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 2), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p1)
    
    bullets_p1 = [
        "Developed a machine learning platform that predicts student mental health scores using social media usage, academic habits, sleep patterns, physical activity, and stress indicators.",
        "Built an end-to-end ML pipeline including data preprocessing, country grouping, feature engineering, logarithmic transformations, scaling, ordinal encoding, and one-hot encoding for robust model training.",
        "Trained and evaluated Linear Regression and Random Forest models, improving performance through hyperparameter tuning with RandomizedSearchCV and automated model selection.",
        "Designed and deployed a FastAPI-based prediction service with Pydantic validation, enabling real-time mental health score estimation through REST APIs.",
        "Implemented a reusable production-ready inference pipeline using Joblib serialization and integrated support for multiple demographic, academic, and behavioral features."
    ]
    for b in bullets_p1:
        story.append(Paragraph(f"• &nbsp;{b}", bullet_style))
        story.append(Spacer(1, 1.5))
    story.append(Spacer(1, 4))

    # Project 2: Multi-Agent PR Review System
    p2_header = [
        [
            Paragraph("<b>Multi-Agent PR Review System</b> &nbsp;|&nbsp; <font size=8 color='#4b5563'><i>Python, FastAPI, React, Ollama, SQLite</i></font>", body_regular),
            Paragraph('<a href="https://github.com/aarushdhuri7/Multi-Agent-PR-Review-System.git"><font color="#1d4ed8"><b>GitHub</b></font></a> &nbsp;|&nbsp; Sep 2026 – Oct 2026', ParagraphStyle('PR2', parent=body_regular, alignment=TA_RIGHT))
        ]
    ]
    t_p2 = Table(p2_header, colWidths=[380, 160])
    t_p2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 2), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p2)

    bullets_p2 = [
        "Developed an AI-powered code review system with five specialized agents for security vulnerability detection, bug identification, performance analysis, testing recommendations, and documentation review.",
        "Integrated the GitHub API to fetch pull request metadata and code diffs for automated analysis.",
        "Integrated a locally hosted Qwen3:8B model through Ollama and built a deterministic aggregation mechanism to consolidate findings into a unified review report.",
        "Deployed backend REST endpoints delivering fast, reliable inferences with consistent sub-500ms response times for review workflows.",
        "Developed a React frontend and FastAPI backend with SQLite-based review history, enabling users to submit pull request URLs and view analysis results."
    ]
    for b in bullets_p2:
        story.append(Paragraph(f"• &nbsp;{b}", bullet_style))
        story.append(Spacer(1, 1.5))
    story.append(Spacer(1, 4))

    # Project 3: RAG-Based Video-Speech Assistant
    p3_header = [
        [
            Paragraph("<b>RAG-Based Video-Speech Assistant</b> &nbsp;|&nbsp; <font size=8 color='#4b5563'><i>Python, Sarvam AI, LangChain, ChromaDB, LLMs</i></font>", body_regular),
            Paragraph('Jun 2026 – Mar 2026', ParagraphStyle('PR3', parent=body_regular, alignment=TA_RIGHT))
        ]
    ]
    t_p3 = Table(p3_header, colWidths=[400, 140])
    t_p3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 2), ('TOPPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_p3)

    bullets_p3 = [
        "Developed a video-speech assistant integrating speech transcription, transcript summarization, and action-item extraction.",
        "Integrated Sarvam AI for speech processing and built LLM-powered workflows for summarizing transcripts and extracting actionable insights.",
        "Implemented a Retrieval-Augmented Generation (RAG) pipeline using ChromaDB for vector storage and context-aware retrieval from processed content."
    ]
    for b in bullets_p3:
        story.append(Paragraph(f"• &nbsp;{b}", bullet_style))
        story.append(Spacer(1, 1.5))
    story.append(Spacer(1, 6))

    # TECHNICAL SKILLS
    story.extend(make_section("TECHNICAL SKILLS"))
    skills = [
        ("Languages", "Python, C++, SQL, HTML/CSS"),
        ("ML & DS", "NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow, Supervised & Unsupervised Learning, Regression, Classification, Clustering, PCA, Feature Engineering, Model Evaluation, Statistical Analysis"),
        ("Artificial Intelligence", "Generative AI, Large Language Models (LLMs), Prompt Engineering, LangChain, Retrieval-Augmented Generation (RAG)"),
        ("Cloud & DevOps", "AWS (Amazon Bedrock, Amazon SageMaker, Amazon S3, Amazon EC2, IAM, AWS Lambda, CloudWatch), Docker, Docker Compose, Git, GitHub")
    ]
    for cat, val in skills:
        story.append(Paragraph(f"<b>{cat}:</b> {val}", ParagraphStyle('SkillLine', parent=body_regular, fontSize=8.5, leading=12)))
        story.append(Spacer(1, 2))
    story.append(Spacer(1, 5))

    # ACHIEVEMENTS
    story.extend(make_section("ACHIEVEMENTS"))
    story.append(Paragraph("<b>Hackathons:</b> Participated in Smart India Hackathon 2025; Certificate of Merit.", ParagraphStyle('Ach1', parent=body_regular, fontSize=8.5, leading=12)))
    story.append(Spacer(1, 2))
    story.append(Paragraph("<b>Certifications:</b> AWS Certified AI Practitioner, RAG Systems Agentic Workflows with Pinecone and LangGraph (Coursera), AI for Everyone (DeepLearning.AI)", ParagraphStyle('Ach2', parent=body_regular, fontSize=8.5, leading=12)))

    doc.build(story)
    print("Resume PDF generated successfully at:", pdf_path)

if __name__ == '__main__':
    generate_pdf()
