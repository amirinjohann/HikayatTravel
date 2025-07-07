// Floating Chat/Support Widget
(function() {
  // Create widget container
  const widget = document.createElement('div');
  widget.id = 'support-widget';
  widget.innerHTML = `
    <div id="support-tab" style="position: fixed; bottom: 30px; right: 30px; z-index: 9999;">
      <button id="support-main-btn" style="background:#3498db;color:#fff;border:none;border-radius:50%;width:56px;height:56px;box-shadow:0 2px 8px rgba(0,0,0,0.15);font-size:1.7rem;cursor:pointer;display:flex;align-items:center;justify-content:center;">💬</button>
      <div id="support-options" style="display:none;flex-direction:column;align-items:flex-end;margin-bottom:10px;">
        <button class="support-option" id="live-chat-btn" style="margin:5px 0;background:#25d366;color:#fff;border:none;border-radius:20px;padding:8px 18px;font-size:1rem;cursor:pointer;display:flex;align-items:center;gap:8px;"><span>🟢</span>Live Chat</button>
        <button class="support-option" id="chatbot-btn" style="margin:5px 0;background:#f1c40f;color:#fff;border:none;border-radius:20px;padding:8px 18px;font-size:1rem;cursor:pointer;display:flex;align-items:center;gap:8px;"><span>🤖</span>Chatbot</button>
        <button class="support-option" id="faq-btn" style="margin:5px 0;background:#34495e;color:#fff;border:none;border-radius:20px;padding:8px 18px;font-size:1rem;cursor:pointer;display:flex;align-items:center;gap:8px;"><span>❓</span>FAQ</button>
      </div>
    </div>
    <div id="chatbot-popup" style="display:none;position:fixed;bottom:100px;right:30px;width:320px;background:#fff;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.18);z-index:10000;overflow:hidden;">
      <div style="background:#3498db;color:#fff;padding:12px 16px;font-weight:bold;">Hikayat Chatbot <span id="close-chatbot" style="float:right;cursor:pointer;font-weight:normal;">&times;</span></div>
      <div id="chatbot-messages" style="padding:16px;height:180px;overflow-y:auto;font-size:0.97rem;"></div>
      <form id="chatbot-form" style="display:flex;border-top:1px solid #eee;">
        <input id="chatbot-input" type="text" placeholder="Type your question..." style="flex:1;padding:10px;border:none;font-size:1rem;outline:none;">
        <button type="submit" style="background:#3498db;color:#fff;border:none;padding:0 18px;">Send</button>
      </form>
    </div>
    <div id="faq-modal" style="display:none;position:fixed;bottom:100px;right:30px;width:340px;background:#fff;border-radius:10px;box-shadow:0 2px 12px rgba(0,0,0,0.18);z-index:10000;overflow:hidden;">
      <div style="background:#34495e;color:#fff;padding:12px 16px;font-weight:bold;">FAQ <span id="close-faq" style="float:right;cursor:pointer;font-weight:normal;">&times;</span></div>
      <div style="padding:16px;max-height:260px;overflow-y:auto;font-size:0.97rem;">
        <strong>Q: How do I book a package?</strong><br>A: Browse packages, click \"Book Now\", and follow the steps.<br><br>
        <strong>Q: How do I contact support?</strong><br>A: Use the Live Chat or WhatsApp button below.<br><br>
        <strong>Q: Can I get a refund?</strong><br>A: Please refer to our refund policy or contact support.<br><br>
        <strong>Q: Where can I download my e-ticket?</strong><br>A: After payment, go to your profile or the payment success page.<br><br>
        <strong>Q: How do I change my profile info?</strong><br>A: Go to the Profile page and click \"Save Changes\" after editing.
      </div>
    </div>
  `;
  document.body.appendChild(widget);

  // Toggle support options
  const mainBtn = document.getElementById('support-main-btn');
  const options = document.getElementById('support-options');
  mainBtn.onclick = function() {
    options.style.display = options.style.display === 'flex' ? 'none' : 'flex';
  };

  // Live Chat (WhatsApp)
  document.getElementById('live-chat-btn').onclick = function() {
    window.open('https://wa.me/60123456789?text=Hi%20Hikayat%20Travels%20Support!', '_blank');
  };

  // Chatbot popup
  const chatbotPopup = document.getElementById('chatbot-popup');
  document.getElementById('chatbot-btn').onclick = function() {
    chatbotPopup.style.display = 'block';
    options.style.display = 'none';
    document.getElementById('chatbot-messages').innerHTML = '<div style="color:#888;">Hi! I am your virtual assistant. How can I help you?</div>';
  };
  document.getElementById('close-chatbot').onclick = function() {
    chatbotPopup.style.display = 'none';
  };
  document.getElementById('chatbot-form').onsubmit = function(e) {
    e.preventDefault();
    const input = document.getElementById('chatbot-input');
    const msg = input.value.trim();
    if (!msg) return;
    const messages = document.getElementById('chatbot-messages');
    messages.innerHTML += `<div style='margin-bottom:6px;'><b>You:</b> ${msg}</div>`;
    // Simple bot response
    let response = 'Sorry, I am just a demo bot. Please contact support for more help!';
    if (/book|package/i.test(msg)) response = 'To book a package, go to Packages and click "Book Now".';
    if (/refund|cancel/i.test(msg)) response = 'For refunds or cancellations, please contact our support via WhatsApp.';
    if (/profile|change|edit/i.test(msg)) response = 'You can edit your profile on the Profile page.';
    if (/ticket|e-ticket/i.test(msg)) response = 'You can download your e-ticket from the Payment Success page or your Profile.';
    setTimeout(() => {
      messages.innerHTML += `<div style='margin-bottom:10px;'><b>Bot:</b> ${response}</div>`;
      messages.scrollTop = messages.scrollHeight;
    }, 500);
    input.value = '';
  };

  // FAQ modal
  const faqModal = document.getElementById('faq-modal');
  document.getElementById('faq-btn').onclick = function() {
    faqModal.style.display = 'block';
    options.style.display = 'none';
  };
  document.getElementById('close-faq').onclick = function() {
    faqModal.style.display = 'none';
  };

  // Hide popups when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === faqModal) faqModal.style.display = 'none';
    if (e.target === chatbotPopup) chatbotPopup.style.display = 'none';
  });
})(); 