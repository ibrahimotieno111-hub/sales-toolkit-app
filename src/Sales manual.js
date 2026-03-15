import { useState } from "react";

// ============================================================
// TABS — The 4 main navigation buttons at the top
// ============================================================
const tabs = ["The Pitch", "Sales Script", "Objections", "Closing"];

// ============================================================
// COLOURS — Change these to update the entire app's theme
// ============================================================
const green = "#1a6b3c";
const lightGreen = "#f0f9f4";
const borderGreen = "#c8e6d8";

// ============================================================
// NUMBER FORMATTER — Formats large numbers with KES prefix
// ============================================================
const fmt = n => n >= 1e6 ? `KES ${(n/1e6).toFixed(2)}M` : `KES ${n.toLocaleString()}`;

export default function App() {
  const [tab, setTab] = useState(0);

  // ----------------------------------------------------------
  // SAVINGS CALCULATOR STATE
  // Change the numbers inside useState() to update defaults
  // ----------------------------------------------------------
  const [students, setStudents] = useState(300);      // Number of students
  const [fuelCost, setFuelCost] = useState(65000);    // Monthly fuel cost in KES
  const [wasteCost, setWasteCost] = useState(15000);  // Monthly waste disposal cost in KES

  // Calculated values (auto-computed from sliders above)
  const annual = (fuelCost + wasteCost) * 12;
  const payback = 3;                                  // Payback period in years — change if needed
  const credits = Math.round(students * 0.8);         // Estimated carbon credits per year

  return (
    <div style={{ fontFamily: "system-ui,sans-serif", maxWidth: 820, margin: "0 auto", padding: 16 }}>

      {/* ======================================================
          HEADER — Change the title and subtitle text here
      ====================================================== */}
      <div style={{ background: `linear-gradient(135deg,${green},#2d9e5f)`, borderRadius: 12, padding: "20px 24px", marginBottom: 20, color: "#fff" }}>
        <div style={{ fontSize: 11, opacity: .8, letterSpacing: 1, textTransform: "uppercase" }}>Sales Toolkit</div>
        <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>Waste-to-Energy for Schools</div>
        <div style={{ fontSize: 13, opacity: .85, marginTop: 4 }}>The Pitch · Sales Script · Objection Handling · Closing</div>
      </div>

      {/* TAB BUTTONS */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {tabs.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
            background: tab === i ? green : "#f0f0f0",
            color: tab === i ? "#fff" : "#444"
          }}>{t}</button>
        ))}
      </div>

      {/* ======================================================
          TAB 0: THE PITCH
          Edit the reframe statement text and cards below
      ====================================================== */}
      {tab === 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* THE CORE REFRAME STATEMENT
              Edit the italic text below to change the pitch */}
          <div style={{ border: `2px solid ${green}`, borderRadius: 12, overflow: "hidden" }}>
            <div style={{ background: green, color: "#fff", padding: "12px 18px" }}>
              <div style={{ fontSize: 11, opacity: .8, letterSpacing: 1, textTransform: "uppercase" }}>The Core Reframe</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 4 }}>Turn the Problem Into the Solution</div>
            </div>
            <div style={{ background: lightGreen, padding: 18 }}>
              <p style={{ fontSize: 14, color: "#1a3a2a", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
                "Right now your school has two problems. The first is called <strong>fuel</strong> — you pay for it every month,
                and the moment you use it, it is gone. No asset. No return. The second is called <strong>waste</strong> — you pay
                to get rid of it, and again, nothing comes back to you.<br/><br/>
                So your school is paying for two problems simultaneously, every month, year after year.<br/><br/>
                Now here is the question I want you to sit with for a moment:<br/><br/>
                <strong>What if the problem itself was the solution?</strong><br/><br/>
                What if the waste your school generates every day — the very thing you are trying to get rid of — became
                the fuel that heats your kitchen water? What if, instead of paying for two problems, your school started{" "}
                <strong>benefiting from both of them?</strong><br/><br/>
                That is not a concept. That is exactly what is happening in schools running our system right now."
              </p>
            </div>
          </div>

          {/* WHEN TO USE IT — Edit labels and descriptions below */}
          <div style={{ border: `1px solid ${borderGreen}`, borderRadius: 10, padding: 16, background: "#fff" }}>
            <div style={{ fontWeight: 700, color: green, marginBottom: 10, fontSize: 14 }}>When & How to Deliver This</div>
            {[
              ["After",       "you have written their fuel cost and waste disposal cost on your notepad — they must see the numbers before they hear the reframe."],
              ["Before",      "you reveal any technical details — this shifts their mindset from cost to opportunity before logic enters the room."],
              ["Slowly",      "pause after 'What if the problem itself was the solution?' — let that question sit in silence for 3–5 seconds. That is where the idea lands."],
              ["With conviction", "Ziglar: 'The prospect is persuaded more by the depth of your conviction than by the height of your logic.'"],
            ].map(([when, what]) => (
              <div key={when} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                <span style={{ background: green, color: "#fff", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 6, flexShrink: 0, marginTop: 2 }}>{when}</span>
                <span style={{ fontSize: 13, color: "#333", lineHeight: 1.6 }}>{what}</span>
              </div>
            ))}
          </div>

          {/* IMPACT CARDS — Edit icon, label, desc, and color for each card */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { icon: "💡", label: "Emotional Impact",   desc: "Reframes their pain as untapped opportunity before numbers arrive",    color: "#e67e22" },
              { icon: "📊", label: "Logical Foundation", desc: "Literally true — waste becomes fuel, cost becomes asset",               color: "#2471a3" },
              { icon: "🔁", label: "Memorable",          desc: "They will repeat this to their board in your exact words",              color: "#7d3c98" },
            ].map(({ icon, label, desc, color }) => (
              <div key={label} style={{ border: `2px solid ${color}`, borderRadius: 10, padding: 14, textAlign: "center" }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>

          {/* SAVINGS CALCULATOR
              Sliders auto-calculate the summary cards below */}
          <div style={{ border: `1px solid ${borderGreen}`, borderRadius: 10, padding: 16, background: "#fff" }}>
            <div style={{ fontWeight: 700, color: green, marginBottom: 14, fontSize: 14 }}>Build Their Numbers Before You Speak</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              {[
                { label: "Number of students",         val: students,  set: setStudents,  min: 50,    max: 2000,  step: 50   },
                { label: "Monthly fuel cost (KES)",    val: fuelCost,  set: setFuelCost,  min: 10000, max: 300000,step: 5000 },
                { label: "Monthly waste disposal (KES)", val: wasteCost, set: setWasteCost, min: 0,   max: 100000,step: 1000 },
              ].map(({ label, val, set, min, max, step }) => (
                <div key={label}>
                  <div style={{ fontSize: 12, color: "#555", marginBottom: 4 }}>{label}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {/* MINUS button */}
                    <button onClick={() => set(Math.max(min, val - step))} style={{
                      width: 28, height: 28, borderRadius: 6, border: `1px solid ${green}`,
                      background: "#fff", color: green, fontWeight: 900, fontSize: 16, cursor: "pointer"
                    }}>−</button>
                    <input type="range" min={min} max={max} step={step} value={val}
                      onChange={e => set(Number(e.target.value))}
                      style={{ flex: 1, accentColor: green }} />
                    {/* PLUS button */}
                    <button onClick={() => set(Math.min(max, val + step))} style={{
                      width: 28, height: 28, borderRadius: 6, border: `1px solid ${green}`,
                      background: "#fff", color: green, fontWeight: 900, fontSize: 16, cursor: "pointer"
                    }}>+</button>
                    <span style={{ fontSize: 13, fontWeight: 700, minWidth: 70, textAlign: "right" }}>{val.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* SUMMARY CARDS — auto-calculated from sliders */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }}>
              {[
                { label: "Monthly savings",       val: fmt(fuelCost + wasteCost), color: green      },
                { label: "Annual savings",        val: fmt(annual),               color: "#2471a3"  },
                { label: "Payback period",        val: `~${payback} yrs`,         color: "#e67e22"  },
                { label: "Est. carbon credits/yr",val: `${credits} tCO₂`,         color: "#7d3c98"  },
              ].map(({ label, val, color }) => (
                <div key={label} style={{ border: `2px solid ${color}`, borderRadius: 10, padding: 12, textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "#777", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: "#999", marginTop: 8 }}>
              * Write these numbers on your notepad before delivering the reframe. Show them — don't just say them.
            </div>
          </div>
        </div>
      )}

      {/* ======================================================
          TAB 1: SALES SCRIPT
          Edit phase titles, steps, and quotes below
      ====================================================== */}
      {tab === 1 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              phase: "1", time: "Before the Call", title: "Pre-Call Research", color: "#2471a3", icon: "🔍",
              steps: [
                "Find out number of students, boarding vs. day scholars",
                "Identify current fuel source (firewood, LPG, electricity?)",
                "Estimate monthly fuel spend (200 students ≈ KES 40,000–80,000/month)",
                "Find out how they dispose of waste and if they pay for it",
                "Identify the decision maker — Bursar, Principal, or Board?",
              ],
              quote: "If I had nine hours to cut down a tree, I would spend six hours sharpening my axe. — Abraham Lincoln"
            },
            {
              phase: "2", time: "First Contact", title: "The Approach", color: "#7d3c98", icon: "🚪",
              steps: [
                "To receptionist: 'My name is [Name]. I help schools reduce fuel and waste costs — sometimes by over 60%. I wonder if the Principal has just five minutes. I promise I won't waste their time.'",
                "Phone opener: 'I work with private schools solving two problems at once — rising fuel costs AND waste disposal headaches. It takes 20 minutes. Would Thursday at 10am work, or is Friday afternoon better?'",
                "Never give a choice between something and nothing — always offer two times.",
              ],
              quote: "Give the prospect a choice between something and something — never between something and nothing. — Ziglar"
            },
            {
              phase: "3", time: "First 5 Minutes", title: "The Opening", color: "#1a6b3c", icon: "🤝",
              steps: [
                "'Thank you for making time. Before I show you anything, I'd like to understand your school better. May I ask you a few questions?'",
                "This disarms them — you are a consultant, not a salesman.",
                "Sit across from both decision makers if possible, not behind a desk.",
                "Bring a notepad. Write everything down visibly — it shows respect.",
              ],
              quote: "Make them feel good about their situation before you try to change it. — Ziglar"
            },
            {
              phase: "4", time: "Minutes 5–15", title: "The Diagnostic Questions", color: "#e67e22", icon: "❓",
              steps: [
                "Q1: 'How does your school currently heat water for cooking operations?'",
                "Q2: 'How many students and staff do you feed daily?'",
                "Q3: 'Roughly what does the school spend on cooking fuel per month?'",
                "Q4: 'Has that cost been going up, staying flat, or going down?'",
                "Q5: 'How does the school handle solid waste from the kitchen and grounds?'",
                "Q6: 'Does the school pay for waste collection? How much monthly?'",
                "Q7: 'Is there waste cooking oil that needs disposal?'",
                "Q8: 'Has anyone ever complained about smoke from burning waste?'",
                "Q9: 'Does the school have any sustainability or green goals?'",
                "Q10: 'If you could wave a magic wand and solve one cost headache — what would it be?'",
              ],
              quote: "Selling isn't telling — it's asking. The six-year-old who asks 700 questions a day gets more than the adult who asks 30. — Ziglar"
            },
            {
              phase: "5", time: "Minutes 15–25", title: "The Reframe & Presentation", color: "#c0392b", icon: "💡",
              steps: [
                "Summarise what you heard: 'You're spending KES [X] on fuel, KES [Y] on waste. Your biggest headache is [their words]. Is that right?'",
                "Then deliver The Core Reframe (see The Pitch tab) — slowly, with conviction.",
                "Paint the picture: '3,600 litres of hot water — every morning — from yesterday's waste.'",
                "Then show the numbers on your notepad. Write them. Don't just say them.",
                "Introduce the carbon credit opportunity last — as a bonus, not the main event.",
              ],
              quote: "You don't sell what the product IS — you sell what it DOES. — Ziglar"
            },
          ].map(({ phase, time, title, color, icon, steps, quote }) => (
            <div key={phase} style={{ border: `1px solid ${color}30`, borderRadius: 10, overflow: "hidden" }}>
              <div style={{ background: color, color: "#fff", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{icon} Phase {phase}: {title}</span>
                <span style={{ fontSize: 12, opacity: .85 }}>{time}</span>
              </div>
              <div style={{ padding: 14, background: "#fff" }}>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {steps.map((s, i) => (
                    <li key={i} style={{ fontSize: 13, color: "#333", marginBottom: 6, lineHeight: 1.6 }}>{s}</li>
                  ))}
                </ul>
                {/* ZIGLAR QUOTE — edit the quote text here */}
                <div style={{ marginTop: 10, padding: "8px 12px", background: lightGreen, borderLeft: `3px solid ${green}`, borderRadius: "0 6px 6px 0", fontSize: 12, color: "#1a3a2a", fontStyle: "italic" }}>
                  {quote}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ======================================================
          TAB 2: OBJECTIONS
          Edit the obj (objection text), color, and response
          bullet points for each objection card below
      ====================================================== */}
      {tab === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: lightGreen, border: `1px solid ${borderGreen}`, borderRadius: 10, padding: 14, fontSize: 13, color: "#1a3a2a" }}>
            💡 <strong>Ziglar's Rule:</strong> "When your prospect raises an objection — get excited. An objection is an expression of interest. You have a live one." Never argue. Never defend. Acknowledge, ask, and reframe.
          </div>
          {[
            {
              obj: "It's too expensive.", color: "#e74c3c",
              response: [
                "Do NOT defend the price. Ask: 'Are you concerned about the upfront investment, or whether the system will actually deliver the savings we've discussed?'",
                "If it's the price: 'You currently spend KES [X] per year on fuel and waste — costs that deliver no asset, no equity, nothing that belongs to the school. This investment generates a return and creates an asset. Which represents better value?'",
                "Then write: Cost of doing nothing vs. cost of the system — side by side on your notepad.",
              ]
            },
            {
              obj: "We need to think about it.", color: "#e67e22",
              response: [
                "Say: 'I completely understand. Is there a specific part you're unsure about, or is it more about timing?'",
                "If they can't name a concern: 'In my experience, when everything makes sense financially, the main reason schools delay is that the right person hasn't been brought into the conversation. Is there someone else who should be here?'",
                "Ziglar: The longer they stay silent after your close, the better your chances. Don't fill the silence.",
              ]
            },
            {
              obj: "We burn our waste — it's free.", color: "#f39c12",
              response: [
                "Ask: 'Has the school received complaints about smoke from neighbours or county authorities?'",
                "Then: 'Open burning is increasingly regulated. The liability — especially for a school with environmentally aware parents — is growing. Our system removes a reputational and compliance risk entirely.'",
                "If no complaints yet: 'The risk is there even if it hasn't surfaced yet. Would you rather address it proactively or reactively?'",
              ]
            },
            {
              obj: "What if it breaks down?", color: "#8e44ad",
              response: [
                "'That is one of the most important questions you can ask — and I'm glad you asked it early.'",
                "Be completely transparent about maintenance requirements, warranty, response time, and spare parts.",
                "'I'd rather tell you exactly what the maintenance requirements are upfront than have you discover them after installation. A system you trust is worth more than one that looks cheaper on paper.'",
              ]
            },
            {
              obj: "Our board needs to approve this.", color: "#2471a3",
              response: [
                "This is NOT a rejection — it is an invitation.",
                "'That's exactly right for a decision this size. I'd like to help you make that board presentation as strong as possible. Can I prepare a one-page financial summary showing ROI, payback period, and environmental impact?'",
                "'Would it be helpful if I attended the board meeting to answer technical questions? I've done this before and it usually speeds up approval considerably.'",
              ]
            },
            {
              obj: "We already use LPG and it works.", color: "#1a6b3c",
              response: [
                "'I understand — and I wouldn't suggest changing something that works. One question: when your LPG supplier increases prices — which they have every year — does your budget automatically absorb that, or does it create pressure?'",
                "'Our system removes that variable entirely. The fuel is generated on your own campus, every day, from your own waste. That's energy independence most schools don't have.'",
                "Ziglar: Find the 'yet' — 'Your system works now... yet prices keep rising.'",
              ]
            },
            {
              obj: "Can you prove it works?", color: "#c0392b",
              response: [
                "'Absolutely — and you should ask that. We have operating installations right now. I'd like to arrange for you to visit one — speak directly with the bursar, not just our team.'",
                "Ziglar: Let satisfied customers sell for you. Their word carries more weight than yours.",
                "'What would you need to see or hear from that visit to feel confident moving forward?'",
              ]
            },
          ].map(({ obj, color, response }) => (
            <div key={obj} style={{ border: `1px solid ${color}40`, borderLeft: `4px solid ${color}`, borderRadius: 8, padding: 14, background: "#fff" }}>
              {/* OBJECTION TEXT — edit the obj value in the array above */}
              <div style={{ fontWeight: 700, fontSize: 14, color, marginBottom: 10 }}>❝ "{obj}"</div>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {response.map((r, i) => (
                  <li key={i} style={{ fontSize: 13, color: "#333", marginBottom: 6, lineHeight: 1.6 }}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* ======================================================
          TAB 3: CLOSING
          Edit title, when, steps, and color for each close
      ====================================================== */}
      {tab === 3 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ background: lightGreen, border: `1px solid ${borderGreen}`, borderRadius: 10, padding: 14, fontSize: 13, color: "#1a3a2a" }}>
            💡 <strong>Ziglar's Rule:</strong> "63% of all sales interviews end with no direct effort to close. Don't be that salesperson. The customer is the big winner — you owe them the close."
          </div>

          {/* CLOSING TECHNIQUES — edit title, when, color, and steps for each */}
          {[
            {
              title: "The Three-Question Close", color: "#1a6b3c", icon: "3️⃣", when: "After the presentation",
              steps: [
                "Q1: 'Can you see how this system would reduce your school's fuel and waste costs significantly?'",
                "Q2: 'Are you interested in reducing those costs?'",
                "Q3: 'If you were ever going to address this problem — when do you think would be the best time to start?'",
                "The third question forces a timeline. If they say 'next year' — ask what changes next year.",
              ]
            },
            {
              title: "The Impending Event Close", color: "#e67e22", icon: "⏰", when: "For procrastinators",
              steps: [
                "'Fuel prices have increased consistently year on year. Every month you delay this decision, you are paying more for a problem this system eliminates permanently.'",
                "'I'm not saying that to pressure you — I'm saying it because if I were in your position, I'd want to know the real cost of waiting.'",
                "Write the monthly savings on your pad. Then write: '× 12 months of delay = [total lost savings]'.",
              ]
            },
            {
              title: "The Ben Franklin Close", color: "#2471a3", icon: "📋", when: "For analytical decision makers",
              steps: [
                "Draw a line on your notepad. Left: 'Reasons to move forward.' Right: 'Concerns.'",
                "Fill the LEFT side WITH them — use their own words from the diagnostic phase.",
                "Let THEM fill the RIGHT side. Don't fill it for them.",
                "'So we have [8] strong reasons here, and [2] concerns we've addressed. What does the balance tell you?'",
              ]
            },
            {
              title: "The Profit-From-the-Problem Close", color: "#7d3c98", icon: "💡", when: "When they are almost there but hesitating",
              steps: [
                "'Let me ask you something directly. Every month this decision is delayed, your school pays [KES X] for a problem that this system eliminates.'",
                "'That's not money spent on education, on facilities, on teachers. It's money spent on fuel that disappears and waste that disappears with it.'",
                "'You don't have to buy our system. But you are already paying for it — every month — in costs with zero return. The only question is: do you keep paying for the problem, or start benefiting from it?'",
                "Then stop. Do not speak. Let the silence work.",
              ]
            },
            {
              title: "The Next Step Close", color: "#c0392b", icon: "➡️", when: "When full commitment is not ready",
              steps: [
                "Never leave without a committed next step.",
                "'I understand you're not ready to make a final decision today — and that's fine. What I'd like to propose is a no-obligation site assessment. We come to the school, assess your waste volumes and kitchen operations, and give you a precise savings calculation for your specific situation. No pressure. No cost. Just facts.'",
                "'Would next week work for that, or is the week after better?'",
                "Ziglar's Alternate of Choice — never give a choice between something and nothing.",
              ]
            },
          ].map(({ title, color, icon, when, steps }) => (
            <div key={title} style={{ border: `1px solid ${color}40`, borderRadius: 10, overflow: "hidden" }}>
              <div style={{ background: color, color: "#fff", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{icon} {title}</span>
                <span style={{ fontSize: 12, opacity: .85 }}>Use: {when}</span>
              </div>
              <div style={{ padding: 14, background: "#fff" }}>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {steps.map((s, i) => (
                    <li key={i} style={{ fontSize: 13, color: "#333", marginBottom: 6, lineHeight: 1.6 }}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* FOLLOW-UP SEQUENCE — edit day, action, and color for each step */}
          <div style={{ border: `1px solid ${borderGreen}`, borderRadius: 10, padding: 16, background: "#fff" }}>
            <div style={{ fontWeight: 700, color: green, marginBottom: 12, fontSize: 14 }}>The Follow-Up Sequence</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { day: "Day 1",  action: "Handwritten note or personal email. Thank them. Attach one-page savings summary. Confirm your next contact date.", color: green      },
                { day: "Day 3",  action: "Phone call. 'Just making sure the summary arrived. Any questions that came up after our meeting?'",              color: "#2471a3"  },
                { day: "Day 7",  action: "Send a value-add — a news article on rising fuel costs or carbon credits. Short note: 'Thought this was relevant to our conversation.'", color: "#e67e22" },
                { day: "Day 14", action: "'Where did the board discussion land? Is there anything I can prepare to help move the process forward?'",        color: "#7d3c98"  },
              ].map(({ day, action, color }) => (
                <div key={day} style={{ border: `2px solid ${color}`, borderRadius: 10, padding: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color, marginBottom: 6 }}>{day}</div>
                  <div style={{ fontSize: 12, color: "#444", lineHeight: 1.6 }}>{action}</div>
                </div>
              ))}
            </div>
            {/* ZIGLAR QUOTE at the bottom */}
            <div style={{ marginTop: 12, padding: "10px 14px", background: lightGreen, borderLeft: `3px solid ${green}`, borderRadius: "0 6px 6px 0", fontSize: 12, color: "#1a3a2a", fontStyle: "italic" }}>
              "Columbus discovered America — but he didn't service the account. That's why we're not called the United States of Columbus." — Ziglar. Always follow up.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}