"use strict";(globalThis.webpackChunk_zendesk_web_widget_messenger=globalThis.webpackChunk_zendesk_web_widget_messenger||[]).push([[2306],{75006:(e,r,a)=>{a.d(r,{Z:()=>t});var n=a(29798),s=a(40707),o=a(36746);const t=()=>((0,n.v9)(o.Kd),s.Z.translate)},92795:(e,r,a)=>{a.d(r,{Z:()=>v});var n=a(98049),s=a.n(n),o=a(15826),t=a(29798),i=a(17255),m=a(39622),l=a.n(m),d=a(82729),b=a(12682),g=a(48829),_=a(21110),c=a(40707),k=a(75006),f=a(65083),u=a(57957),p=a(55786);const w=(0,i.vJ)([""," html{overflow-y:hidden;font-size:initial;",";}"],l(),(e=>e.backgroundColor&&`background: ${e.backgroundColor}`)),h=e=>{let{children:r,setBackgroundColor:a}=e;const n=(0,t.v9)(u.vb),s=(0,t.v9)(f.l),i=s?_.lH:_.XE,m=(0,g.ND)(),l=(0,k.Z)();(0,o.useEffect)((()=>{m.document.documentElement.setAttribute("dir",c.Z.isRTL()?"rtl":"ltr"),m.document.documentElement.setAttribute("lang",c.Z.getLocale())}),[c.Z.getLocale()]);return(0,p.jsx)(d.Z,{currentFrame:m,primaryColor:n.primary,messageColor:n.message,actionColor:n.action,baseFontSize:i,isFullScreen:s,rtl:c.Z.isRTL(),locale:c.Z.getLocale(),labels:{receipts:{receivedRecently:l("embeddable_framework.messenger.message.receipt.received_recently"),status:{[b.Gs.sending]:l("embeddable_framework.messenger.receipt.sending"),[b.Gs.sent]:l("embeddable_framework.messenger.receipt.sent"),[b.Gs.failed]:l("embeddable_framework.messenger.receipt.retry")},errors:{tooMany:l("embeddable_framework.messenger.file_upload.error.file_count_limit",{fileUploadCountLimit:_._v}),fileSize:l("embeddable_framework.messenger.file_upload.error.file_size_limit",{fileUploadSizeLimitInMb:50}),characterLimit:l("embeddable_framework.messenger.receipt.exceed_limit"),fileType:l("embeddable_framework.messenger.file_upload.error.file_type_limit"),unknown:l("embeddable_framework.messenger.file_upload.tap_to_retry"),failedToSendAriaLabel:l("embeddable_framework.messenger.file_upload.error.failed_to_send.aria_label")}},footer:{referrerLink:{label:l("embeddable_framework.messenger.footer.referrer_link.label"),text:l("embeddable_framework.messenger.footer.referrer_link.text")}},carouselMessage:{previousButtonAriaLabel:l("embeddable_framework.messenger.carousel_message.button.previous"),nextButtonAriaLabel:l("embeddable_framework.messenger.carousel_message.button.next"),actionButtonFormat:(e,r)=>l("embeddable_framework.messenger.carousel_message.action.accessible_text",{action:e,title:r})},composer:{placeholder:l("embeddable_framework.messenger.composer.placeholder"),inputAriaLabel:l("embeddable_framework.messenger.composer.label"),sendButtonTooltip:l("embeddable_framework.messenger.composer.send_button_tooltip"),sendButtonAriaLabel:l("embeddable_framework.messenger.composer.send_button_label")},fileUpload:{uploadButtonAriaLabel:l("embeddable_framework.messenger.file_upload.upload_button"),dragDropOverlayText:l("embeddable_framework.messenger.file_upload.drag_drop_overlay_text")},imageMessage:{openImage:l("embeddable_framework.messenger.file_upload.open_image_in_new_tab_v2"),primaryParticipantAltText:l("embeddable_framework.messenger.image_message.alt_text.end_user_v2"),otherParticipantAltText:l("embeddable_framework.messenger.image_message.alt_text.agent_v2")},fileMessage:{sizeInKB:e=>l("embeddable_framework.messenger.message.file.size_in_kb",{size:e}),sizeInMB:e=>l("embeddable_framework.messenger.message.file.size_in_mb",{size:e}),downloadAriaLabel:l("embeddable_framework.messenger.message.file.download"),titleFormat:e=>l("embeddable_framework.messenger.file_message.alt_text",{filename:e})},messengerHeader:{avatarAltTag:l("embeddable_framework.messenger.header.company_logo"),closeButtonAriaLabel:l("embeddable_framework.messenger.header.close"),optionsMenuAriaLabel:l("embeddable_framework.messenger.options_menu"),continueOnChannel:e=>l(`embeddable_framework.messenger.header.menu.continue_on_${e.toLowerCase()}`)},otherParticipantLayout:{avatarAltTag:""},formMessage:{nextStep:l("embeddable_framework.messenger.message.form.next_step"),send:l("embeddable_framework.messenger.message.form.submit"),submitting:l("embeddable_framework.messenger.message.form.submitting"),submissionError:l("embeddable_framework.messenger.message.form.failed_to_submit"),stepStatus:(e,r)=>l("embeddable_framework.messenger.message.form.step_status",{step:e,totalSteps:r}),errors:{requiredField:e=>l("embeddable_framework.messenger.message.form.field_is_required_v3",{fieldLabel:e}),requiredName:l("embeddable_framework.messenger.message.form.incomplete_name"),invalidEmail:l("embeddable_framework.messenger.message.form.invalid_email"),requiredEmail:l("embeddable_framework.messenger.message.form.incomplete_email"),errorIcon:l("embeddable_framework.messenger.message.form.error_icon"),fieldMinSize:(e,r)=>l("embeddable_framework.messenger.message.form.invalid_min_characters_v3",{count:r,fieldLabel:e}),fieldMaxSize:(e,r)=>l(1===r?"embeddable_framework.messenger.message.form.invalid_max_characters.one_v3":"embeddable_framework.messenger.message.form.invalid_max_characters.other_v3",{count:r,fieldLabel:e})},selectSearchEmpty:l("embeddable_framework.messenger.message.form.select_search_empty")},launcher:{openWindowAriaLabel:l("embeddable_framework.messenger.launcher.button"),closeWindowAriaLabel:l("embeddable_framework.messenger.launcher.button_close_messaging_window")},launcherLabel:{ariaLabel:l("embeddable_framework.messenger.launcher_label.close_v2")},formatTimestamp:e=>{const r=new Date,a=new Date(e),n=a.getDate()===r.getDate()&&a.getMonth()===r.getMonth()&&a.getFullYear()===r.getFullYear();return`${a.toLocaleString(c.Z.getLocale(),{...n?{}:{month:"long",day:"numeric"},hour:"numeric",minute:"numeric"})}`},messageLog:{initialConversationRequestFailed:l("embeddable_framework.messenger.initial_conversation_request_failed"),initialConversationRetry:l("embeddable_framework.messenger.initial_conversation_retry"),initialConversationSpinner:l("embeddable_framework.messenger.initial_conversation_spinner"),messageHistoryRetry:l("embeddable_framework.messenger.previous_messages_retry"),messageHistorySpinner:l("embeddable_framework.messenger.previous_messages_spinner"),dividers:{unreadMessagesDivider:l("embeddable_framework.messenger.unread_message_divider.new")}},notification:{connectError:l("embeddable_framework.messenger.notification.channel_linking.link.failed"),disconnectError:l("embeddable_framework.messenger.notification.channel_linking.unlink.fail"),aiDisclaimer:l("embeddable_framework.messenger.message_bubble.ai_disclaimer")},channelLink:{linkError:{qrError:l("embeddable_framework.messenger.channel_link.link_error.qr_code_error"),buttonError:l("embeddable_framework.messenger.channel_link.link_error.button_error"),retry:l("embeddable_framework.messenger.file_upload.tap_to_retry")},generateNewQrCode:l("embeddable_framework.messenger.channel_linking.generate_new_qr_code"),generateNewLink:l("embeddable_framework.messenger.channel_linking.generate_new_link"),whatsapp:{title:l("embeddable_framework.messenger.channel_linking.page.title.whatsapp"),subtitle:l("embeddable_framework.messenger.channel_linking.page.subtitle.whatsapp"),instructions:{desktop:()=>l("embeddable_framework.messenger.channel_linking.page.instructions_desktop.whatsapp"),mobile:()=>l("embeddable_framework.messenger.channel_linking.page.instructions_mobile.whatsapp")},qrCodeAlt:l("embeddable_framework.messenger.channel_linking.page.qr_code.whatsapp"),button:{desktop:l("embeddable_framework.messenger.channel_linking.page.button_desktop.whatsapp"),mobile:l("embeddable_framework.messenger.channel_linking.page.button_mobile.whatsapp")},disconnectButtonText:l("embeddable_framework.messenger.channel_link.whatsapp.disconnect_button_text"),disconnectLinkText:l("embeddable_framework.messenger.channel_link.whatsapp.disconnect_link_text")},messenger:{title:l("embeddable_framework.messenger.channel_linking.page.title.fb_messenger"),subtitle:l("embeddable_framework.messenger.channel_linking.page.subtitle.fb_messenger"),instructions:{desktop:()=>l("embeddable_framework.messenger.channel_linking.page.instructions_desktop.fb_messenger"),mobile:()=>l("embeddable_framework.messenger.channel_linking.page.instructions_mobile.fb_messenger")},qrCodeAlt:l("embeddable_framework.messenger.channel_linking.page.qr_code.fb_messenger"),button:{desktop:l("embeddable_framework.messenger.channel_linking.page.button_desktop.fb_messenger"),mobile:l("embeddable_framework.messenger.channel_linking.page.button_mobile.fb_messenger")},disconnectButtonText:l("embeddable_framework.messenger.channel_link.messenger.disconnect_button_text"),disconnectLinkText:l("embeddable_framework.messenger.channel_link.messenger.disconnect_link_text")},instagram:{title:l("embeddable_framework.messenger.channel_linking.page.title.instagram"),subtitle:l("embeddable_framework.messenger.channel_linking.page.subtitle.instagram"),instructions:{desktop:e=>l("embeddable_framework.messenger.channel_linking.page.instructions_desktop.instagram",{instagramHandle:e}),mobile:e=>l("embeddable_framework.messenger.channel_linking.page.instructions_mobile.fb_messenger",{instagramHandle:e})},qrCodeAlt:l("embeddable_framework.messenger.channel_linking.page.qr_code.instagram"),button:{desktop:l("embeddable_framework.messenger.channel_linking.page.button_desktop.instagram"),mobile:l("embeddable_framework.messenger.channel_linking.page.button_mobile.instagram")},disconnectButtonText:l("embeddable_framework.messenger.channel_link.instagram.disconnect_button_text"),disconnectLinkText:l("embeddable_framework.messenger.channel_link.instagram.disconnect_link_text")}},proactiveMessaging:{proactiveMessage:{avatarAlt:e=>{let{name:r}=e;return l("embeddable_framework.messenger.proactive_message.avatar_alt",{name:r})}}},soundNotifications:{toggleEnabled:l("embeddable_framework.messenger.sound_notification.toggle.enabled"),toggleDisabled:l("embeddable_framework.messenger.sound_notification.toggle.disabled"),hiddenField:l("embeddable_framework.messenger.sound_notification.toggle.hidden_label")},postbackAction:{fieldError:e=>{let{errorSource:r}=e;return l("embeddable_framework.messenger.postback_button.error.global_error_message",{errorSource:r})}},emojiPicker:{people:l("embeddable_framework.messenger.emoji.people"),nature:l("embeddable_framework.messenger.emoji.nature"),food:l("embeddable_framework.messenger.emoji.food"),activities:l("embeddable_framework.messenger.emoji.activities"),places:l("embeddable_framework.messenger.emoji.places"),objects:l("embeddable_framework.messenger.emoji.objects"),symbols:l("embeddable_framework.messenger.emoji.symbols"),flags:l("embeddable_framework.messenger.emoji.flags"),tonePickerTooltipSelectTone:l("embeddable_framework.messenger.emoji.tone_picker.tooltip.select_tone"),tonePickerLabelDefaultTone:l("embeddable_framework.messenger.emoji.tone_picker.label.default_tone"),tonePickerLabelLightTone:l("embeddable_framework.messenger.emoji.tone_picker.label.light_tone"),tonePickerLabelMediumLightTone:l("embeddable_framework.messenger.emoji.tone_picker.label.medium_light_tone"),tonePickerLabelMediumTone:l("embeddable_framework.messenger.emoji.tone_picker.label.medium_tone"),tonePickerLabelMediumDarkTone:l("embeddable_framework.messenger.emoji.tone_picker.label.medium_dark_tone"),tonePickerLabelDarkTone:l("embeddable_framework.messenger.emoji.tone_picker.label.dark_tone"),searchLabel:l("embeddable_framework.messenger.emoji.search_label"),tooltipEmojiButton:l("embeddable_framework.messenger.emoji.tooltip.emoji_button")},conversationsList:{conversationsFailedToLoad:l("embeddable_framework.messenger.multiconversation.conversations_load_failed"),messageHistorySpinner:"Loading previous conversations"},ariaLabels:{unreadMessagesCount:{oneUnreadMessage:l("embeddable_framework.messenger.multiconversation.preview_one_unread_message"),moreThanOneUnreadMessage:e=>l("embeddable_framework.messenger.multiconversation.preview_less_than_99_unread_message",{count:e}),moreThan99UnreadMessages:l("embeddable_framework.messenger.multiconversation.preview_more_than_99_unread_message")}}},children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(w,{backgroundColor:a?n.primary:void 0}),r]})})};h.propTypes={children:s().node,setBackgroundColor:s().bool};const v=h},82729:(e,r,a)=>{a.d(r,{Z:()=>_,u:()=>d});var n=a(98049),s=a.n(n),o=a(17255),t=a(80502),i=a(12682),m=a(68762),l=a(55786);const d=(0,m.Z)(),b=(0,o.vJ)(["html{color:",";}"],(e=>e.theme.messenger.colors.frameText)),g=e=>{let{primaryColor:r,messageColor:a,actionColor:n,rtl:s,baseFontSize:o,currentFrame:i,labels:d,isFullScreen:g,children:_,locale:c}=e;const k=(0,m.Z)({rtl:s,currentFrame:i,baseFontSize:o,primaryColor:r,messageColor:a,actionColor:n,labels:d,isFullScreen:g,locale:c});return(0,l.jsxs)(t.ThemeProvider,{theme:k,children:[(0,l.jsx)(b,{}),_]})};g.propTypes={children:s().node,primaryColor:s().string,messageColor:s().string,actionColor:s().string,rtl:s().bool,locale:s().string,baseFontSize:s().string,currentFrame:s().object,labels:s().shape({composer:s().shape({placeholder:s().string,inputAriaLabel:s().string,sendButtonTooltip:s().string,sendButtonAriaLabel:s().string}),fileUpload:s().shape({uploadButtonAriaLabel:s().string,dragDropOverlayText:s().string,messageBubbleHover:s().string}),fileMessage:s().shape({sizeInMB:s().func,sizeInKB:s().func,downloadAriaLabel:s().string}),formMessage:s().shape({nextStep:s().string,send:s().string,submitting:s().string,submissionError:s().string,stepStatus:s().func,errors:s().shape({fieldMaxSize:s().func,fieldMinSize:s().func,invalidEmail:s().string,requiredEmail:s().string,requiredField:s().func,requiredName:s().string,errorIcon:s().string})}),messengerHeader:s().shape({avatarAltTag:s().string,closeButtonAriaLabel:s().string}),receipts:s().shape({status:s().shape({[i.Gs.sending]:s().string,[i.Gs.sent]:s().string,[i.Gs.failed]:s().string}),errors:s().shape({tooMany:s().string,fileSize:s().string,unknown:s().string}),receivedRecently:s().string}),postbackAction:s().shape({fieldError:s().func})}),launcher:s().shape({ariaLabel:s().string}),isFullScreen:s().bool,emojiPicker:s().shape({people:s().string,nature:s().string,food:s().string,activities:s().string,places:s().string,objects:s().string,symbols:s().string,flags:s().string,tonePickerTooltipSelectTone:s().string,tonePickerLabelDefaultTone:s().string,tonePickerLabelLightTone:s().string,tonePickerLabelMediumLightTone:s().string,tonePickerLabelMediumTone:s().string,tonePickerLabelMediumDarkTone:s().string,tonePickerLabelDarkTone:s().string,searchLabel:s().string,tooltipEmojiButton:s().string})};const _=g},48829:(e,r,a)=>{a.d(r,{ND:()=>o,ZP:()=>t});var n=a(15826);const s=(0,n.createContext)({document,window}),o=()=>(0,n.useContext)(s),t=(s.Consumer,s.Provider)}}]);