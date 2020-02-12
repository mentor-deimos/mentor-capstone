const client = filestack.init(fileStackKey);
const options = {
    onFileSelected: file => {
        // onUploadDone: (res) => app
        if (file.size > 1000 * 1000) {
            throw new Error('File too big, select something smaller than 1MB');
        }
    }
};



$("#menteeBtn").click(function () {
    $("#right").html(
        "<div class=\"rightContent\">\n" +
        "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>2</p></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>3</p></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>4</p></div>\n" +
        "</div>" +
        "<div style=\"margin-left: 30%\">" +
        "<div class='form'>" +
        "<form action=\"/register\" method=\"post\">\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"username\">Username:</label>\n" +
        "            <input id=\"username\" name=\"username\" class=\"form-control\" type=\"text\" value=\"\">\n" +
        "        </div>\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"email\">Email:</label>\n" +
        "            <input id=\"email\" name=\"email\" class=\"form-control\" type=\"text\" value=\"\">\n" +
        "        </div>\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"password\">Password:</label>\n" +
        "            <input id=\"password\" name=\"password\" class=\"form-control\" type=\"password\">\n" +
        "        </div>\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"confirm_password\">Confirm Password:</label>\n" +
        "            <input id=\"confirm_password\" name=\"confirm_password\" class=\"form-control\" type=\"password\">\n" +
        "        </div>\n" +
        "        <input type=\"submit\" class=\"button\" id='subButton'>\n" +
        "</form>" +
        "</div>" +
        "</div>"
    );
    $("#subButton").click(function () {
        $("#right").html(
            "<div class=\"rightContent\">\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>3</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>4</p></div>\n" +
            "</div>" +
            "<div style=\"text-align: center\">" +
            "<div style='display: flex; justify-content: center'>" +
            "<h2>Upload profile picture:</h2>" +
            "<button id='upload' class='button'><img src='../img/svg/photograph.svg' alt='' style='height: 100%' id='picUpLoad'></button>" +
            "</div>" +
            "<form action=\"#\" method=\"post\">\n" +
            "<h2>Write a short bio about yourself:</h2>" +
            "<textarea cols=\"40\" rows=\"8\" name=\"textarea\" id=\"textarea\"></textarea>" +
            "<br>" +
            "<h2>Areas of Need:</h2>" +
            "<div th:each=\"skill : ${interests}\">" +
            "<p th:text=\"${skill.interests}\" />" +
            "</div>" +
            "<input type='submit' value='Next' id='next' class='button'>" +
            "</form>" +
            "</div>"
        );
        $("#upload").click(function () {

            client.picker(options).open();
        });
    $("#next").click(function () {
        $("#right").html(
            "<div class=\"rightContent\">\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>4</p></div>\n" +
            "</div>" +
            "<div style=\"text-align: center\">" +
            "<h1>Terms and Conditions</h1>" +
            "<div id='legal' style='overflow: scroll; height: 50vh; border:2px solid grey; margin: 50px'>" +
            "<h2>PROHIBITED ACTIVITIES</h2>" +
            "<p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.\n" +
            " \n" +
            "As a user of the Site, you agree not to:\n" +
            "\n" +
            "1. Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.\n" +
            "2. Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.\n" +
            "3. Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.\n" +
            "4. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.\n" +
            "5. Use any information obtained from the Site in order to harass, abuse, or harm another person.\n" +
            "6. Make improper use of our support services or submit false reports of abuse or misconduct.\n" +
            "7. Use the Site in a manner inconsistent with any applicable laws or regulations.\n" +
            "8. Use the Site to advertise or offer to sell goods and services.\n" +
            "9. Engage in unauthorized framing of or linking to the Site.\n" +
            "10. Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.\n" +
            "11. Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.\n" +
            "12. Delete the copyright or other proprietary rights notice from any Content.\n" +
            "13. Attempt to impersonate another user or person or use the username of another user.\n" +
            "14. Sell or otherwise transfer your profile.\n" +
            "15. Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).\n" +
            "16. Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.\n" +
            "17. Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.\n" +
            "18. Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.\n" +
            "19. Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.\n" +
            "20. Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.\n" +
            "21. Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.\n" +
            "22. Use a buying agent or purchasing agent to make purchases on the Site.\n" +
            "23. Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.\n" +
            "24. Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</p>" +
            "<h2>USER GENERATED CONTRIBUTIONS</h2>" +
            "<p>The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, \"Contributions\"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:\n" +
            "  \n" +
            "1.  The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.\n" +
            "2.  You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.\n" +
            "3.  You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.\n" +
            "4.  Your Contributions are not false, inaccurate, or misleading.\n" +
            "5.  Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.\n" +
            "6.  Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).\n" +
            "7.  Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.\n" +
            "8.  Your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another.\n" +
            "9.  Your Contributions do not violate any applicable law, regulation, or rule.\n" +
            "10.  Your Contributions do not violate the privacy or publicity rights of any third party.\n" +
            "11.  Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.\n" +
            "12.  Your Contributions do not violate any federal or state law concerning child pornography, or otherwise intended to protect the health or well-being of minors;\n" +
            "13.  Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.\n" +
            "14.  Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.\n" +
            "\n" +
            "Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.</p>" +
            "<h2>CONTRIBUTION LICENSE</h2>" +
            "<p>By posting your Contributions to any part of the Site, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.\n" +
            "    \n" +
            "This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.\n" +
            "    \n" +
            "We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.  \n" +
            "    \n" +
            "We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.</p>" +
            "<h2>SUBMISSIONS</h2>" +
            "<p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (\"Submissions\") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</p>" +
            "<h2>THIRD-PARTY WEBSITE AND CONTENT</h2>" +
            "<p>The Site may contain (or you may be sent via the Site) links to other websites (\"Third-Party Websites\") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (\"Third-Party Content\"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.</p>" +
            "<h2>ADVERTISERS</h2>" +
            "<p>We allow advertisers to display their advertisements and other information in certain areas of the Site, such as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibility for any advertisements you place on the Site and any services provided on the Site or products sold through those advertisements. Further, as an advertiser, you warrant and represent that you possess all rights and authority to place advertisements on the Site, including, but not limited to, intellectual property rights, publicity rights, and contractual rights. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.\n</p>" +
            "<h2>SITE MANAGEMENT</h2>" +
            "<p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.\n</p>" +
            "<h2>PRIVACY POLICY</h2>" +
            "<p>We care about data privacy and security. By using the Site, you agree to be bound by our Privacy Policy posted on the Site, which is incorporated into these Terms of Use. Please be advised the Site is hosted in the United States. If you access the Site from the European Union, Asia, or any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children’s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Site as quickly as is reasonably practical.\n</p>" +
            "<h2>COPYRIGHT INFRINGEMENTS</h2>" +
            "<p>We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a “Notification”). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.\n</p>" +
            "<h2>TERM AND TERMINATION</h2>" +
            "<p>These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.\n" +
            " \n" +
            "If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>" +
            "<h2>MODIFICATIONS AND INTERRUPTIONS \n</h2>" +
            "<p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.  \n" +
            " \n" +
            "We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.</p>" +
            "<h2>GOVERNING LAW</h2>" +
            "<p>These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of Texas applicable to agreements made and to be entirely performed within the State of Texas, without regard to its conflict of law principles.\n</p>" +
            "<h2>DISPUTE RESOLUTION</h2>" +
            "<h3>Informal Negotiations</h3>" +
            "<p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each a \"Dispute\" and collectively, the “Disputes”) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.\n</p>" +
            "<h3>Binding Arbitration</h3>" +
            "<p>If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved through binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (\"AAA\") and, where appropriate, the AAA’s Supplementary Procedures for Consumer Related Disputes (\"AAA Consumer Rules\"), both of which are available at the AAA website: www.adr.org. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in Medina County, Texas. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.      \n</p>" +
            "<p>If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in Medina County, Texas, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the the Uniform Computer Information Transaction Act (UCITA) is excluded from these Terms of Use.\n</p>" +
            "<p>In no event shall any Dispute brought by either Party related in any way to the Site be commenced more than one (1) years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable, and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.\n</p>" +
            "<h3>Restrictions</h3>" +
            "<p>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.\n</p>" +
            "<h3>Exceptions to Informal Negotiations and Arbitration</h3>" +
            "<p>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.\n</p>" +
            "<h2>CORRECTIONS</h2>" +
            "<p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.\n</p>" +
            "<h2>DISCLAIMER</h2>" +
            "<p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.\n</p>" +
            "<h2>LIMITATIONS OF LIABILITY</h2>" +
            "<p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.\n</p>" +
            "<h2>INDEMNIFICATION</h2>" +
            "<p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms of Use; (4) any breach of your representations and warranties set forth in these Terms of Use; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.\n</p>" +
            "<h2>USER DATA\n</h2>" +
            "<p>We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.\n</p>" +
            "<h2>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES\n</h2>" +
            "<p>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means. \n</p>" +
            "<h2>CALIFORNIA USERS AND RESIDENTS\n</h2>" +
            "<p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.\n</p>" +
            "<h2>MISCELLANEOUS</h2>" +
            "<p>These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.\n</p>" +
            "<h2>CONTACT US</h2>" +
            "<p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: \n" +
            " \n" +
            "mentor\n" +
            "600 NAVARRO ST. #600, SAN ANTONIO, TX\n" +
            "San Antonio, TX 78205\n" +
            "United States\n" +
            "Phone: 2108388883\n" +
            "jameshester88@gmail.com</p>" +
            "</div>" +
            "<button id='disagree' class='button'>Disagree</button>" +
            "<button id='agree' class='button'>Agree</button>" +
            "</div>"
        );
        $("#disagree").click(function () {
            alert("You must click agree to continue.")
        })
        $("#agree").click(function () {
            $(location).attr('href', 'home');
        })
    });
});
});







$("#mentorBtn").click(function () {
    $("#right").html(
        "<div class=\"rightContent\">\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>✔</p></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"line\"></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>2</p></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>3</p></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>4</p></div>\n" +
        "</div>" +
        "<div style=\"margin-left: 30%\">" +
        "<div class='form'>" +
        "<form action=\"/register\" method=\"post\">\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"username\">Username:</label>\n" +
        "            <input id=\"username\" name=\"username\" class=\"form-control\" type=\"text\" value=\"\">\n" +
        "        </div>\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"email\">Email:</label>\n" +
        "            <input id=\"email\" name=\"email\" class=\"form-control\" type=\"text\" value=\"\">\n" +
        "        </div>\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"password\">Password:</label>\n" +
        "            <input id=\"password\" name=\"password\" class=\"form-control\" type=\"password\">\n" +
        "        </div>\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"confirm_password\">Confirm Password:</label>\n" +
        "            <input id=\"confirm_password\" name=\"confirm_password\" class=\"form-control\" type=\"password\">\n" +
        "        </div>\n" +
        "        <input type=\"submit\" class=\"button\" id='subButton'  style='background-color: #FEDD00'>\n" +
        "</form>" +
        "</div>" +
        "</div>"
    );
    $("#subButton").click(function () {
        $("#right").html(
            "<div class=\"rightContent\">\n" +
            "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #FEDD00\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #FEDD00\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>3</p></div>\n" +
            "    <div style=\"background-color: #FEDD00\" class=\"littleCircle\"></div>\n" +
            "    <div style=\"background-color: #FEDD00\" class=\"littleCircle\"></div>\n" +
            "    <div style=\"background-color: #FEDD00\" class=\"littleCircle\"></div>\n" +
            "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>4</p></div>\n" +
            "</div>" +
            "<div style=\"text-align: center\">" +
            "<div style='display: flex; justify-content: center'>" +
            "<h2>Upload profile picture</h2>" +
            "<button id='upload' class='button' style='background-color: #FEDD00'><img src='../img/svg/photograph.svg' alt='' style='height: 100%' id='picUpLoad'></button>" +
            "</div>" +
            "<form action=\"#\" method=\"post\">\n" +

            "<h2>Write a short bio about yourself:</h2>" +
            "<textarea cols=\"40\" rows=\"8\" name=\"textarea\" id=\"textarea\"></textarea>" +
            "<br>" +
            "<h2>Areas of Knowledge:</h2>" +
            "<div></div>" +
            "<input type='submit' value='Next' id='next' class='button' style='background-color: #FEDD00'>" +
            "</form>" +
            "</div>"
        );
        $("#upload").click(function () {
            client.picker(options).open();
        });
        $("#next").click(function () {
            $("#right").html(
                "<div class=\"rightContent\">\n" +
                "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>✔</p></div>\n" +
                "    <div style=\"background-color: #FEDD00\" class=\"line\"></div>\n" +
                "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>✔</p></div>\n" +
                "    <div style=\"background-color: #FEDD00\" class=\"line\"></div>\n" +
                "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>✔</p></div>\n" +
                "    <div style=\"background-color: #FEDD00\" class=\"line\"></div>\n" +
                "    <div style=\"background-color: #FEDD00\" class=\"bigCircle\"><p>4</p></div>\n" +
                "</div>" +
                "<div style=\"text-align: center\">" +
                "<h1>Terms and Conditions</h1>" +
                "<div id='legal' style='overflow: scroll; height: 50vh; border:2px solid grey; margin: 50px'>" +
                "<h2>PROHIBITED ACTIVITIES</h2>" +
                "<p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.\n" +
                " \n" +
                "As a user of the Site, you agree not to:\n" +
                "\n" +
                "1. Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.\n" +
                "2. Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.\n" +
                "3. Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.\n" +
                "4. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.\n" +
                "5. Use any information obtained from the Site in order to harass, abuse, or harm another person.\n" +
                "6. Make improper use of our support services or submit false reports of abuse or misconduct.\n" +
                "7. Use the Site in a manner inconsistent with any applicable laws or regulations.\n" +
                "8. Use the Site to advertise or offer to sell goods and services.\n" +
                "9. Engage in unauthorized framing of or linking to the Site.\n" +
                "10. Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.\n" +
                "11. Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.\n" +
                "12. Delete the copyright or other proprietary rights notice from any Content.\n" +
                "13. Attempt to impersonate another user or person or use the username of another user.\n" +
                "14. Sell or otherwise transfer your profile.\n" +
                "15. Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).\n" +
                "16. Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.\n" +
                "17. Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.\n" +
                "18. Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.\n" +
                "19. Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.\n" +
                "20. Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.\n" +
                "21. Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.\n" +
                "22. Use a buying agent or purchasing agent to make purchases on the Site.\n" +
                "23. Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.\n" +
                "24. Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</p>" +
                "<h2>USER GENERATED CONTRIBUTIONS</h2>" +
                "<p>The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, \"Contributions\"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:\n" +
                "  \n" +
                "1.  The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.\n" +
                "2.  You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.\n" +
                "3.  You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.\n" +
                "4.  Your Contributions are not false, inaccurate, or misleading.\n" +
                "5.  Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.\n" +
                "6.  Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).\n" +
                "7.  Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.\n" +
                "8.  Your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another.\n" +
                "9.  Your Contributions do not violate any applicable law, regulation, or rule.\n" +
                "10.  Your Contributions do not violate the privacy or publicity rights of any third party.\n" +
                "11.  Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.\n" +
                "12.  Your Contributions do not violate any federal or state law concerning child pornography, or otherwise intended to protect the health or well-being of minors;\n" +
                "13.  Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.\n" +
                "14.  Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.\n" +
                "\n" +
                "Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.</p>" +
                "<h2>CONTRIBUTION LICENSE</h2>" +
                "<p>By posting your Contributions to any part of the Site, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.\n" +
                "    \n" +
                "This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.\n" +
                "    \n" +
                "We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.  \n" +
                "    \n" +
                "We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.</p>" +
                "<h2>SUBMISSIONS</h2>" +
                "<p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (\"Submissions\") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</p>" +
                "<h2>THIRD-PARTY WEBSITE AND CONTENT</h2>" +
                "<p>The Site may contain (or you may be sent via the Site) links to other websites (\"Third-Party Websites\") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (\"Third-Party Content\"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.</p>" +
                "<h2>ADVERTISERS</h2>" +
                "<p>We allow advertisers to display their advertisements and other information in certain areas of the Site, such as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full responsibility for any advertisements you place on the Site and any services provided on the Site or products sold through those advertisements. Further, as an advertiser, you warrant and represent that you possess all rights and authority to place advertisements on the Site, including, but not limited to, intellectual property rights, publicity rights, and contractual rights. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.\n</p>" +
                "<h2>SITE MANAGEMENT</h2>" +
                "<p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.\n</p>" +
                "<h2>PRIVACY POLICY</h2>" +
                "<p>We care about data privacy and security. By using the Site, you agree to be bound by our Privacy Policy posted on the Site, which is incorporated into these Terms of Use. Please be advised the Site is hosted in the United States. If you access the Site from the European Union, Asia, or any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children’s Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Site as quickly as is reasonably practical.\n</p>" +
                "<h2>COPYRIGHT INFRINGEMENTS</h2>" +
                "<p>We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a “Notification”). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to federal law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.\n</p>" +
                "<h2>TERM AND TERMINATION</h2>" +
                "<p>These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.\n" +
                " \n" +
                "If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>" +
                "<h2>MODIFICATIONS AND INTERRUPTIONS \n</h2>" +
                "<p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.  \n" +
                " \n" +
                "We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith.</p>" +
                "<h2>GOVERNING LAW</h2>" +
                "<p>These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of Texas applicable to agreements made and to be entirely performed within the State of Texas, without regard to its conflict of law principles.\n</p>" +
                "<h2>DISPUTE RESOLUTION</h2>" +
                "<h3>Informal Negotiations</h3>" +
                "<p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each a \"Dispute\" and collectively, the “Disputes”) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.\n</p>" +
                "<h3>Binding Arbitration</h3>" +
                "<p>If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved through binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (\"AAA\") and, where appropriate, the AAA’s Supplementary Procedures for Consumer Related Disputes (\"AAA Consumer Rules\"), both of which are available at the AAA website: www.adr.org. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in Medina County, Texas. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.      \n</p>" +
                "<p>If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in Medina County, Texas, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the the Uniform Computer Information Transaction Act (UCITA) is excluded from these Terms of Use.\n</p>" +
                "<p>In no event shall any Dispute brought by either Party related in any way to the Site be commenced more than one (1) years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable, and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.\n</p>" +
                "<h3>Restrictions</h3>" +
                "<p>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.\n</p>" +
                "<h3>Exceptions to Informal Negotiations and Arbitration</h3>" +
                "<p>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.\n</p>" +
                "<h2>CORRECTIONS</h2>" +
                "<p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.\n</p>" +
                "<h2>DISCLAIMER</h2>" +
                "<p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.\n</p>" +
                "<h2>LIMITATIONS OF LIABILITY</h2>" +
                "<p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.\n</p>" +
                "<h2>INDEMNIFICATION</h2>" +
                "<p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms of Use; (4) any breach of your representations and warranties set forth in these Terms of Use; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.\n</p>" +
                "<h2>USER DATA\n</h2>" +
                "<p>We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.\n</p>" +
                "<h2>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES\n</h2>" +
                "<p>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means. \n</p>" +
                "<h2>CALIFORNIA USERS AND RESIDENTS\n</h2>" +
                "<p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.\n</p>" +
                "<h2>MISCELLANEOUS</h2>" +
                "<p>These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.\n</p>" +
                "<h2>CONTACT US</h2>" +
                "<p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: \n" +
                " \n" +
                "mentor\n" +
                "600 NAVARRO ST. #600, SAN ANTONIO, TX\n" +
                "San Antonio, TX 78205\n" +
                "United States\n" +
                "Phone: 2108388883\n" +
                "jameshester88@gmail.com</p>" +
                "</div>" +
                "<button id='disagree' class='button'>Disagree</button>" +
                "<button id='agree' class='button'>Agree</button>" +
                "</div>"
            );
            $("#disagree").click(function () {
                alert("You must click agree to continue.")
            });
            $("#agree").click(function () {
                $(location).attr('href', 'home');
            });
        });
    });
});
