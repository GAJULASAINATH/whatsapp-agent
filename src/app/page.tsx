'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, BrainCircuit, Calendar, MessageSquare, Globe, Zap, Database, Server } from 'lucide-react';
import React from 'react';
import WhatsAppMockup from '@/components/WhatsAppMockup';
import WorkflowDiagram from '@/components/WorkflowDiagram';
import { Tiles } from '@/components/ui/Tiles';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function Home() {
    return (
        <main style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', background: '#050505' }}>

            {/* Background Tiles */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'auto' }}>
                    <Tiles rows={50} cols={40} tileSize="lg" />
                </div>
                {/* Fade out bottom/top edges for better look */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '20%', background: 'linear-gradient(to bottom, #050505, transparent)', zIndex: 1, pointerEvents: 'none' }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '20%', background: 'linear-gradient(to top, #050505, transparent)', zIndex: 1, pointerEvents: 'none' }}></div>
            </div>

            {/* Content Wrapper - Ensure z-index is higher than background */}
            <div style={{ position: 'relative', zIndex: 10 }}>

                {/* Navigation removed as requested */}

                {/* Hero Section */}
                <section className="container" style={{ paddingBlock: '10rem 4rem', textAlign: 'center' }}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h1
                            variants={fadeInUp}
                            style={{
                                fontSize: 'clamp(3rem, 8vw, 6rem)',
                                lineHeight: 1.1,
                                marginBottom: '1.5rem',
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(to right, #fff, #888)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                color: 'white' // Fallback
                            }}
                        >
                            Automate your<br />
                            <span className="text-gradient">business on WhatsApp</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="section-subtitle"
                            style={{ fontSize: '1.25rem', color: '#aaa', margin: '0 auto 3rem', maxWidth: '600px' }}
                        >
                            Your AI-powered assistant that handles queries, bookings, and support 24/7.
                            Built with cutting-edge technology for local businesses.
                        </motion.p>

                        {/* Live Demo Mockup */}
                        <motion.div
                            variants={fadeInUp}
                            style={{ margin: '4rem auto', position: 'relative', zIndex: 10 }}
                        >
                            <WhatsAppMockup />
                        </motion.div>

                    </motion.div>

                    {/* Comparison Section (Before/After) */}
                    <motion.div
                        className="grid-comparison"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        style={{ maxWidth: '1000px', margin: '6rem auto 0' }}
                    >

                        {/* Before Card */}
                        <motion.div
                            className="card"
                            variants={fadeInUp}
                            style={{ borderColor: 'rgba(239, 83, 80, 0.2)' }}
                        >
                            <div className="green-glow" style={{ background: 'radial-gradient(circle, rgba(239, 83, 80, 0.15) 0%, rgba(0, 0, 0, 0) 70%)' }}></div>
                            <div className="bot-icon" style={{ borderColor: '#331111' }}>
                                <XCircle size={32} color="#ef5350" />
                            </div>

                            <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: '#ef5350' }}>Before</h2>

                            <div className="list-item">
                                <span className="list-number" style={{ color: '#ef5350' }}>01.</span>
                                <p>No 24/7 support — miss customers after hours</p>
                            </div>
                            <div className="list-item">
                                <span className="list-number" style={{ color: '#ef5350' }}>02.</span>
                                <p>Manual appointment booking — double bookings & errors</p>
                            </div>
                            <div className="list-item">
                                <span className="list-number" style={{ color: '#ef5350' }}>03.</span>
                                <p>Slow replies — frustrated customers</p>
                            </div>
                            <div className="list-item">
                                <span className="list-number" style={{ color: '#ef5350' }}>04.</span>
                                <p>Limited to one language (e.g., only English/Kannada)</p>
                            </div>
                            <div className="list-item">
                                <span className="list-number" style={{ color: '#ef5350' }}>05.</span>
                                <p>Missed leads & orders outside business hours</p>
                            </div>
                        </motion.div>

                        {/* After Card */}
                        <motion.div
                            className="card"
                            variants={fadeInUp}
                            style={{ borderColor: 'rgba(0, 230, 118, 0.3)', transform: 'scale(1.02)' }}
                        >
                            <div className="green-glow"></div>
                            <div className="bot-icon" style={{ borderColor: '#003311' }}>
                                <CheckCircle2 size={32} color="var(--primary)" />
                            </div>

                            <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: 'var(--primary)' }}>After</h2>

                            <div className="list-item">
                                <span className="list-number">01.</span>
                                <p style={{ color: 'white' }}>24/7 instant support – never miss a message</p>
                            </div>
                            <div className="list-item">
                                <span className="list-number">02.</span>
                                <p style={{ color: 'white' }}>Automated appointment booking & calendar sync</p>
                            </div>
                            <div className="list-item">
                                <span className="list-number">03.</span>
                                <p style={{ color: 'white' }}>Instant, smart replies powered by AI</p>
                            </div>
                            <div className="list-item">
                                <span className="list-number">04.</span>
                                <p style={{ color: 'white' }}>Multi-language support (English, Hindi, Kannada, Tamil+)</p>
                            </div>
                            <div className="list-item">
                                <span className="list-number">05.</span>
                                <p style={{ color: 'white' }}>Capture leads & orders round-the-clock</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </section>

                {/* How It Works / Workflow Section */}
                <section style={{ padding: '6rem 2rem', background: '#0a0a0a' }}>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '4rem' }}
                        >
                            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>How It Works</h2>
                            <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto' }}>
                                We use a sophisticated stack of tools to ensure reliability, memory retention, and instant execution.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <WorkflowDiagram />
                        </motion.div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section style={{ padding: '6rem 2rem', background: '#080808', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '4rem' }}
                        >
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-outfit)', fontWeight: 400, color: '#666' }}>Powered by Modern Infrastructure</h3>
                        </motion.div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', opacity: 0.8 }}>
                            {/* Tech Items */}
                            <TechItem icon={<Database size={32} />} label="Redis Chat Memory" />
                            <TechItem icon={<MessageSquare size={32} />} label="Evolution API" />
                            <TechItem icon={<Zap size={32} />} label="n8n Automation" />
                            <TechItem icon={<BrainCircuit size={32} />} label="Qdrant Vector DB" />
                            <TechItem icon={<Server size={32} />} label="GCP Deployment" />
                        </div>
                    </div>
                </section>

                {/* CTA / Footer */}
                <section style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                    <div className="green-glow" style={{ top: '50%' }}></div>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to upgrade your business?</h2>
                        <p style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '3rem' }}>
                            Get in touch to deploy your own custom WhatsApp AI agent.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                            <a href="mailto:gagajulasainath25@gmail.com" style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 600 }}>
                                gagajulasainath25@gmail.com
                            </a>
                            {/* Website link removed as requested */}
                            <p style={{ color: '#444', marginTop: '1rem' }}>+91 8618887937</p>
                        </div>
                    </motion.div>
                </section>

                {/* Floating WhatsApp Button */}
                <motion.a
                    href="https://wa.me/919019433005"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        width: '64px',
                        height: '64px',
                        backgroundColor: '#25D366',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        zIndex: 100,
                        cursor: 'pointer',
                        textDecoration: 'none' // Ensure no underline
                    }}
                >
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.472 14.382C17.112 14.382 16.752 14.247 16.477 13.972C15.927 13.422 15.927 12.527 16.477 11.977L19.977 8.477C20.527 7.927 21.422 7.927 21.972 8.477C22.522 9.027 22.522 9.922 21.972 10.472L18.472 13.972C18.197 14.247 17.837 14.382 17.472 14.382Z" fill="white" fillOpacity="0" />
                        <path d="M12.025 21.5C7.036 21.5 2.919 17.65 2.551 12.783L2.015 14.73C1.865 15.276 2.158 15.842 2.684 16.059L4.856 16.953C5.77 19.344 8.086 21.055 10.821 21.055C11.233 21.055 11.636 21.011 12.025 20.932V21.5Z" fill="white" fillOpacity="0" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 13.847 2.492 15.572 3.363 17.062L2.062 21.808L6.967 20.573C8.4 21.365 10.046 21.818 11.799 21.916C11.866 21.918 11.933 21.919 12 21.919C17.523 21.919 22 17.442 22 11.919C22 6.396 17.523 1.919 12 1.919V2ZM12 4.091C16.324 4.091 19.828 7.595 19.828 11.919C19.828 16.243 16.324 19.747 12 19.747C10.513 19.747 9.123 19.345 7.915 18.643C7.683 18.508 7.419 18.479 7.165 18.558L4.665 19.336L5.342 16.637C5.454 16.19 5.291 15.719 4.935 15.424C4.156 14.417 3.697 13.127 3.841 11.731C4.093 9.296 6.002 7.292 8.423 6.845C9.578 6.632 10.771 6.536 12 4.091ZM16.398 14.977C16.264 15.228 15.518 15.656 15.176 15.751C14.656 15.894 14.305 15.938 13.791 15.823C12.986 15.642 11.761 15.147 10.354 13.739C9.176 12.562 8.476 11.127 8.351 10.54C8.225 9.944 8.653 9.471 8.841 9.255C8.981 9.094 9.177 9.049 9.349 9.049C9.522 9.049 9.613 9.053 9.721 9.058C9.932 9.068 10.059 8.988 10.158 8.751C10.276 8.468 10.612 7.643 10.75 7.378C10.902 7.087 10.875 6.892 10.74 6.757C10.605 6.622 10.428 6.568 10.25 6.568C10.055 6.568 9.851 6.645 9.664 6.833C9.376 7.121 8.5 7.997 8.5 9.774C8.5 11.551 9.792 13.277 9.981 13.529C10.17 13.78 12.443 17.279 15.807 18.622C18.667 19.764 19.168 19.462 19.702 19.381C20.672 19.234 21.05 18.618 21.2 17.86C21.35 17.102 21.433 16.452 21.366 16.326C21.299 16.2 21.049 16.125 20.648 15.925C20.248 15.725 18.288 14.761 17.921 14.577C17.553 14.394 17.286 14.303 17.019 14.704C16.752 15.105 16.533 14.726 16.398 14.977Z" fill="white" />
                    </svg>
                </motion.a>

            </div>
        </main>
    );
}

function TechItem({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '150px' }}>
            <div style={{
                width: '64px', height: '64px', background: '#111', borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid #222', color: 'var(--primary)'
            }}>
                {icon}
            </div>
            <span style={{ fontSize: '0.9rem', color: '#888', fontWeight: 500 }}>{label}</span>
        </div>
    );
}
